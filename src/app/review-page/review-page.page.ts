import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.page.html',
  styleUrls: ['./review-page.page.scss'],
})
export class ReviewPagePage implements OnInit {


  difficulty: string = "Intro";
  language: string = "HTML";


  isHtml = false
  isCss = false
  isPython = false
  isJavascript = false
  isJava = false
  isCpp = false

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      this.difficulty = params['diff']
      this.language = params['lang']


      this.isHtml = this.language === 'HTML';
      this.isCss = this.language === 'CSS';
      this.isPython = this.language === 'Python';
    })
  }

}
