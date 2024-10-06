import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-forpass',
  templateUrl: './forpass.page.html',
  styleUrls: ['./forpass.page.scss'],
})
export class ForpassPage implements OnInit {

  user = {
    username: '',
    email: '',
    password: ''
  }


  constructor(private apiService: ApiService, private router: Router,private toastController: ToastController,private fireBaseService: FirebaseService) { }

  isEmailEntered = false;
  isPasswordEntered = false;
  isUserNameEntered = false;

  checkInput(field: string) {
    if (field === 'email') {
      this.isEmailEntered = this.user.email.length > 0;
    } else if (field === 'username') {
      this.isUserNameEntered = this.user.username.length > 0;
    } else if (field === 'password') {
      this.isPasswordEntered = this.user.password.length > 0;
    }

  }

  async presentToast(message: string, color: 'success' | 'danger') {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'top',
      color: color
    });
    await toast.present();
  }


  async resetPassword() {
    if (this.isEmailEntered && this.isUserNameEntered) {
      try {
        // Call the forgotPass method from FirebaseService
        const result = await this.fireBaseService.forgotPass(this.user.email, this.user.username);
        console.log(result);
        this.presentToast('Password reset email sent successfully. Please check your inbox.', 'success');
        
        // Optionally redirect the user to another page after success
        this.router.navigate(['/login']);
      } catch (error) {

        if(error instanceof Error){
          console.error('Password reset failed:', error);
          this.presentToast(error.message, 'danger');  
        }

      }
    } else {
      this.presentToast('Please fill in all fields.', 'danger'); // Handle incomplete form
    }
  }



  ngOnInit() {
  }

}
