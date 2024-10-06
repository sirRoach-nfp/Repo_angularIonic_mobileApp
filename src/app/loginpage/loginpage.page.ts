import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

import { setEmail, setUsername } from '../store/user/user.actions';
import { UserState } from '../store/user/user.reducer';
import { Store } from '@ngrx/store';
import { ToastController } from '@ionic/angular';
import { FirebaseService } from '../firebase.service';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {

  constructor(private apiService: ApiService, private router:Router,private store: Store<{user: UserState}>,private toastController: ToastController,private fireBaseService: FirebaseService ) { }

  credential = {
    email: '',
    password: ''

  }

  isEmailEntered = false;
  isPasswordEntered = false;

  checkInput(field: string) {
    if (field === 'email') {
      this.isEmailEntered = this.credential.email.length > 0;
    } else if (field === 'password') {
      this.isPasswordEntered = this.credential.password.length > 0;
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 5000,
      position: 'top', 
      color: 'danger' 
    });
    await toast.present();
  }


  /*

  login(){
    this.apiService.login(this.credential).subscribe(
      response => {
        console.log(`Login successful`,response)
        //console.log("Username response: " + response.username)

        const username = response.username;
        const email = response.email;
        localStorage.setItem("username",username);
        this.store.dispatch(setUsername({username}))
        this.store.dispatch(setEmail(email))
        localStorage.setItem('username', username);
        this.router.navigate(['/home'])

      },
      error=>{
        console.log(`login failed`,error)
        this.presentToast('Login failed: Incorrect credentials');
      }
    )
  }

  */

  /*
  async login() {
    console.log("Attempting to log in");
    
    await this.fireBaseService.login(this.credential.email, this.credential.password)
      .then(response => {
        console.log('Login successful:', response);
  
        const email = response.email;
        const localId = response.localId;
        const idToken = response.idToken;
  
        // Save data to local storage
        localStorage.setItem("idToken", idToken);
        localStorage.setItem("email", email);
        localStorage.setItem("localId", localId);
  
        // Dispatch username and email to the store
        this.store.dispatch(setUsername({ username: response.username || 'User' }));
        this.store.dispatch(setEmail(email));
  
        // Navigate to the home page
        this.router.navigate(['/home']);
      })
      .catch(error => {
        console.log('Login failed:', error);
        this.presentToast('Login failed: Incorrect credentials');
      });
  }*/

  async login() {
    console.log("Attempting to log in");
    
    await this.fireBaseService.login(this.credential.email, this.credential.password)
      .then(response => {
        console.log('Login successful:', response);
    
        const email = response.email;
        const localId = response.localId;
        const idToken = response.idToken;
        const username = response.username
        console.log(email + " " + username)
        // Save data to local storage
        localStorage.setItem("idToken", idToken);
        localStorage.setItem("email", email);
        localStorage.setItem("localId", localId);
        localStorage.setItem("username",username);
        localStorage.setItem("isLogged","true");
    
        // Dispatch username and email to the store
        this.store.dispatch(setUsername(username));
        this.store.dispatch(setEmail(email));
    
        // Navigate to the home page
        this.router.navigate(['/home']);
      })
      .catch(error => {
        console.log('Login failed:', error);
        this.presentToast(error.message || 'Login failed: Incorrect credentials');
      });
      }

  ngOnInit() {
  }

}
