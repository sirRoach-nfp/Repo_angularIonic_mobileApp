import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

import { setUsername } from '../store/user/user.actions';
import { UserState } from '../store/user/user.reducer';
import { Store } from '@ngrx/store';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {

  constructor(private apiService: ApiService, private router:Router,private store: Store<{user: UserState}>,private toastController: ToastController ) { }

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


  login(){
    this.apiService.login(this.credential).subscribe(
      response => {
        console.log(`Login successful`,response)
        //console.log("Username response: " + response.username)

        const username = response.username;
        localStorage.setItem("username",username);
        this.store.dispatch(setUsername({username}))
      },
      error=>{
        console.log(`login failed`,error)
        this.presentToast('Login failed: Incorrect credentials');
      }
    )
  }

  
  ngOnInit() {
  }

}
