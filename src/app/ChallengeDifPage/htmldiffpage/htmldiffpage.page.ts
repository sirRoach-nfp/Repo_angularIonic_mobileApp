import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-htmldiffpage',
  templateUrl: './htmldiffpage.page.html',
  styleUrls: ['./htmldiffpage.page.scss'],
})
export class HTMLdiffpagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  navigateToExercise(diff:string,lang:string):void{
    this.router.navigate([`/exercise-page`],{queryParams:{diff,lang}})
  }

}
