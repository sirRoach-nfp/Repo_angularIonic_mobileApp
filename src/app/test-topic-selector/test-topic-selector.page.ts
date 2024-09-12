/*
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ExerciseServiceService } from '../GPTservice/exercise-service.service';
@Component({
  selector: 'app-test-topic-selector',
  templateUrl: './test-topic-selector.page.html',
  styleUrls: ['./test-topic-selector.page.scss'],
})
export class TestTopicSelectorPage implements OnInit {

  constructor(private router: Router, private exerciseService: ExerciseServiceService) { }


  exercises: any;

  navigateToTopic(topic: string):void{
    this.router.navigate(['/page-test'],{queryParams:{topic}})
  }

  generatePythonExercise(){
    const prompt = `Generate 5 basic exercises for python`;

    this.exerciseService.generateExercises(prompt).subscribe(
      (response)=>{
        this.exercises = response.choices[0].text.split('\n');
        console.log(this.exercises)
      },

      (error)=>{
        console.error('Error Generating exercises',error);
      }
    )
  }

  ngOnInit() {
  }

}
*/