import { Component, OnInit, AfterViewChecked,ChangeDetectorRef, OnChanges , Input} from '@angular/core';

import { HTMLbasic } from 'src/TestData/htmlBasics';
import { HTMLIntro } from 'src/TestData/htmlIntro';
import { CSSintro } from 'src/TestData/cssIntro';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-markup'; 
import 'prismjs/components/prism-javascript';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-exercise-renderer',
  templateUrl: './exercise-renderer.component.html',
  styleUrls: ['./exercise-renderer.component.scss'],
  animations: [
    trigger('answerAnimation', [
      state('hidden', style({
        opacity: 0,
        height: '0px',
        overflow: 'hidden',
        padding: '0px',
        margin: '0px',
  
      })),
      state('visible', style({
     
        opacity: 1,
        height: '*',
        padding: '50px',
        margin: '50px 0',
      })),
      transition('hidden <=> visible', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class ExerciseRendererComponent  implements OnInit,AfterViewChecked {

  @Input() difficulty: string = ''
  @Input() lang: string = ''

  exercise = HTMLbasic;

  
  exercises: any ={};
  currentExerciseIndex = 0;

  showAnswer = false;

  constructor(private cdr:ChangeDetectorRef) { }

  ngOnInit() {
    this.loadExercise()
  }

  ngOnchanges(){
    this.loadExercise();
  }


  loadExercise(){
    if(this.lang === "HTML"){
      switch(this.difficulty){
        case "Intro":
          this.exercises = [...HTMLIntro].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;
        case "Basic":
          this.exercises = [...HTMLbasic].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;

        default:
          this.exercises = [];
          break;
        
      }
    }

    else if(this.lang === "CSS"){
      switch(this.difficulty){
        case "Intro":
          this.exercises = [...CSSintro].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;
        default:
          this.exercises = [];
          break
      }
    }
  }

  pickRandomExercises(){
    const shuffled = [...HTMLbasic].sort(()=> 0.5 - Math.random());
    this.exercises = shuffled.slice(0,5);
  }
  
  highlightCode(code: string) {
    if (!code) return '';
    const htmlLanguage = (Prism.languages as any)['html'];
    return Prism.highlight(code, htmlLanguage, 'html');
  }
  
  ngAfterViewChecked() {
    
    console.log('ngAfterViewChecked called');
    Prism.highlightAll();  // Re-run Prism after every view check to ensure code is highlighted
  }


  prevExercise(){
    if(this.currentExerciseIndex > 0){
      this.currentExerciseIndex--;
      this.cdr.detectChanges(); // Ensure Angular updates the view
      setTimeout(() => Prism.highlightAll(), 0); // Highlight code after view update
      this.showAnswer = false;
    }
  }

  nextExercise(){
    if(this.currentExerciseIndex < this.exercises.length - 1){
      this.currentExerciseIndex++;
      this.cdr.detectChanges(); // Ensure Angular updates the view
      setTimeout(() => Prism.highlightAll(), 0); // Highlight code after view update
      this.showAnswer = false;
    }
  }


  toggleAnswer() {
    this.showAnswer = !this.showAnswer; // Toggle answer visibility
  }




}
