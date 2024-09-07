import { Component, OnInit } from '@angular/core';
import { Route, Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercise-selector',
  templateUrl: './exercise-selector.page.html',
  styleUrls: ['./exercise-selector.page.scss'],
})
export class ExerciseSelectorPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {


  }

}
