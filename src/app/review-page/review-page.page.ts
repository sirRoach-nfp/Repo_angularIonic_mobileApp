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


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
