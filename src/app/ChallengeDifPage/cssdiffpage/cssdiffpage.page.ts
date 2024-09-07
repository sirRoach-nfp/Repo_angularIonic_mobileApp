import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cssdiffpage',
  templateUrl: './cssdiffpage.page.html',
  styleUrls: ['./cssdiffpage.page.scss'],
})
export class CSSdiffpagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }



  navigateToExercise(diff: string,lang: string){
    this.router.navigate([`/exercise-page`],{queryParams:{diff,lang}})
  }

}
