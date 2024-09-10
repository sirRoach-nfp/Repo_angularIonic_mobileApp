import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

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


  constructor(private apiService: ApiService,private router: Router) { }

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

  ngOnInit() {
  }

}
