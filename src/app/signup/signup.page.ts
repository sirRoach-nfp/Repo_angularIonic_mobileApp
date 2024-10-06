import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  user = {
    username: '',
    email: '',
    password:''
  }


  constructor(private apiService: ApiService,private router: Router,private firebaseService: FirebaseService,private toastController: ToastController) { }

  isEmailEntered = false;
  isPasswordEntered = false;
  isUserNameEntered = false;


  
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'top',
      color: 'danger'
    });
    await toast.present();
  }


  checkInput(field: string) {
    if (field === 'email') {
      this.isEmailEntered = this.user.email.length > 0;
    } else if (field === 'username') {
      this.isUserNameEntered = this.user.username.length > 0;
    } else if (field === 'password') {
      this.isPasswordEntered = this.user.password.length > 0;
    }
    
  }

  /*

  register(){
    this.apiService.signUp(this.user).subscribe(
      response => {
        console.log('Registration successful:',response);
        this.router.navigate(['/login']);
      },
      error=>{
        console.error("Registration failed",error);
      }
    )
  }
  */

  register() {
    if (this.user.password.length < 6) {
      this.presentToast("Password must be at least 6 characters long.");
      return;
    }
    
    this.firebaseService.register(this.user.username, this.user.email, this.user.password)
      .then(response => {
        console.log('Registration successful:', response);
        this.router.navigate(['/login']); // Navigate to the login page on success
      })
      .catch(error => {
        console.error("Registration failed", error); // Handle registration errors
        console.log(error.message)
        this.presentToast(error.message);
      });
  }

  ngOnInit() {
  }

}
