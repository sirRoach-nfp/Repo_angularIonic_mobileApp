import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {


  isLoading: boolean = true
  isLogged: boolean = false
  logged: string | null = ""
  constructor(private router: Router) { }

  ngOnInit() {

    //this.logged = localStorage.getItem("isLogged");
    this.logged = localStorage.getItem("isLogged")

    if(this.logged === "true"){
      
      this.isLogged  =true;

      setTimeout(() => { this.isLogged = true; this.router.navigate(['/home']); }, 5000);
      this.isLoading = false;


    }

    else{
      this.isLogged = false
    }

  }

}
