import { Component, OnInit } from '@angular/core';
import { HTMLbasic } from 'src/TestData/htmlBasics';
import { HTMLIntro } from 'src/TestData/htmlIntro';
import { Route, Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-exercise-page',
  templateUrl: './exercise-page.page.html',
  styleUrls: ['./exercise-page.page.scss'],
})
export class ExercisePagePage implements OnInit {

  exerciseData: string[] = []

  difficulty: string = ''
  lang: string = ''
  constructor(private route:ActivatedRoute) { }


  isHtml = false;
  isCss = false;
  isPython = false;

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      this.difficulty = params['diff']
      this.lang = params['lang']


      this.isHtml = this.lang === 'HTML';
      this.isCss = this.lang === 'CSS';
      this.isPython = this.lang === 'Python';
      //console.log(diff + " " + lang)

    
    })
  }


}
