import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
//import { AngularFireDatabase } from '@angular/fire/database'; // For Realtime Database
import { AngularFirestore } from '@angular/fire/compat/firestore'; // For Firestore
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { UserData } from 'src/TestData/interface';
import { coerceStringArray } from '@angular/cdk/coercion';
@Injectable({
  providedIn: 'root'
})



export class FirebaseService {



  private userBasePath = "Users"
  private blogBasePath = "Blogs"
  constructor(private firestore: AngularFirestore,private auth: AngularFireAuth ) { }
  



  /*
  register(username: string, email: string, password: string): Promise<any> {
    return this.auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        // Get the user UID

        let uid = " "
        if (userCredential.user) {
          // Get the user UID
           uid = userCredential.user.uid;
        }

        // Prepare user data to store in Firestore
        const userData = {
          username: username,
          email: email,
          uid: uid,
          createdAt: new Date() // Optional: Add a created timestamp
        };

        // Store additional user information in Firestore
        return this.firestore.collection(this.userBasePath).doc(uid).set(userData)
          .then(() => {
            // Return user data on successful registration
            return userData;
          });
      })
      .catch(error => {
        // Handle registration errors
        console.error('Registration failed:', error);
        throw error; // Rethrow error for handling in the calling function
      });
  }*/

  register(username: string, email: string, password: string): Promise<any> {

    if(password.length < 6){
      throw new Error("Weak Password")
    }

    return this.auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {

        const uid = userCredential.user?.uid; // Get the user UID

        // Prepare user data to store in Firestore
        const userData = {
          username: username,
          email: email,
          uid: uid,
          createdAt: new Date() // Optional: Add a created timestamp
        };

        // Store additional user information in Firestore
        return this.firestore.collection(this.userBasePath).doc(uid).set(userData)
          .then(() => {
            // Send email verification
            return userCredential.user?.sendEmailVerification()
              .then(() => {
                // Return user data on successful registration
                return userData;
              });
          });
      })
      .catch(error => {
        // Handle registration errors
        console.error('Registration failed:', error);
        throw error; // Rethrow error for handling in the calling function
      });
      }

  /*
  async login(email: string, password: string): Promise<any> {
   
    return this.auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      if (userCredential.user) {
        return {
          email: userCredential.user.email,
          localId: userCredential.user.uid,
          idToken: userCredential.user.refreshToken,
          username: userCredential.user.displayName || 'User'
        };
      } else {
        throw new Error('User not found');
      }
    })
    .catch(error => {
      console.error('Login failed:', error);
      throw error;
    });
  }
*/

/*
async login(email: string, password: string): Promise<any> {
  return this.auth.signInWithEmailAndPassword(email, password)
    .then(async userCredential => {
      const user = userCredential.user;
      if (user) {
        // Check if the email is verified
        if (!user.emailVerified) {
          throw new Error('Email not verified. Please check your inbox for the verification email.');
        }


        const userDoc = await this.firestore.collection('userCollection').doc(user.uid).get();
        if (!userDoc.exists) {
          throw new Error('User data not found in collection');
        }
        const userData = userDoc.data();
        
        
        // Return user data if email is verified
        return {
          email: user.email,
          localId: user.uid,
          idToken: user.refreshToken,
          username: user.displayName || 'User'
        };
      } else {
        throw new Error('User not found');
      }
    })
    .catch(error => {
      console.error('Login failed:', error);
      throw error;
    });
}
*/



login(email: string, password: string): Promise<any> {
  return this.auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      if (user) {
        // Check if the email is verified
        if (!user.emailVerified) {
          throw new Error('Email not verified. Please check your inbox for the verification email.');
        }
        
        // Fetch additional user data from Firestore using Observable
        return new Promise((resolve, reject) => {
          this.firestore.collection('Users').doc<UserData>(user.uid).get().subscribe(userDoc => {
            if (!userDoc.exists) {
              reject('User data not found in collection');
            } else {
              const userData = userDoc.data();
              resolve({
                email: user.email,
                localId: user.uid,
                idToken: user.refreshToken,
                username: userData?.username || 'User' // Retrieve the username from Firestore
              });
            }
          }, error => {
            reject('Error fetching user data');
          });
        });
      } else {
        throw new Error('User not found');
      }
    })
    .catch(error => {
      console.error('Login failed:', error);
      throw error;
    });
}

  logout(): Promise<void> {
    return this.auth.signOut().then(() => {
      console.log('User logged out successfully');
    }).catch(error => {
      console.error('Logout failed:', error);
      throw error; // Optional: Handle or rethrow the error as needed
    });
  }



  searchBlogs(searchValue: string): Observable<any[]> {
    // Use Firestore's `where` clause to search for blogs by title
    console.log(searchValue)
    return this.firestore.collection(this.blogBasePath, ref => 
      ref.where('title', '>=', searchValue)
         .where('title', '<=', searchValue + '\uf8ff') // Firestore specific range query
    ).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;  // Cast to 'any' to match your data structure
        const id = a.payload.doc.id;
        return { id, ...data }; // Return id and the blog data (cover, content, desc, title)
      }))
    );
  }

  fetchBlogByField(blogID: string): Observable<any[]> {
    return this.firestore.collection(this.blogBasePath, ref => 
      ref.where('id', '==', blogID)  // Adjust field name if necessary
    ).valueChanges();
  }


  async forgotPass(email: string, username: string): Promise<any> {
    // Step 1: Check if the user exists with the provided email and username
    try {
      const userQuery = await this.firestore.collection(this.userBasePath, ref => 
        ref.where('email', '==', email).where('username', '==', username)
      ).get().toPromise();
  
      // Check if the query returned any results
      if (!userQuery || userQuery.empty) {
        throw new Error('No user found with the provided email and username');
      }
  
      // Step 2: Send password reset email
      return this.auth.sendPasswordResetEmail(email)
        .then(() => {
          console.log('Password reset email sent to:', email);
          return "Password reset email sent. Please check your inbox for the verification email.";
        })
        .catch(error => {
          console.error('Error sending password reset email:', error);
          throw new Error('Failed to send password reset email');
        });
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw new Error('Error fetching user data');
    }
  }
  



}


