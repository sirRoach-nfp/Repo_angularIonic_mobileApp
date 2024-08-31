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
