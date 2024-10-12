import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {


  isLoading: boolean = true
  isLogged: boolean = false
  logged: string | null = ""
  constructor() { }

  ngOnInit() {

    //this.logged = localStorage.getItem("isLogged");
    this.logged = localStorage.getItem("isLogged")

    if(this.logged === "true"){
      this.isLoading = false;
      this.isLogged  =true;

      setTimeout(() => this.isLogged = true, 5000);
    }

    else{
      this.isLogged = false
    }

  }

}
