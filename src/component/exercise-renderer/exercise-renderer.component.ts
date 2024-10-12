import { Component, OnInit, AfterViewChecked,ChangeDetectorRef, OnChanges , Input} from '@angular/core';
import { Router } from '@angular/router';
//import { HTMLbasic } from 'src/TestData/htmlBasics';
import { HTMLIntro } from 'src/TestData/htmlIntro';
import { CSSintro } from 'src/TestData/cssIntro';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-markup'; 
import 'prismjs/components/prism-javascript';
import { trigger, state, style, transition, animate } from '@angular/animations';




//CPP
import { CPPintro } from 'src/TestData/ExerciseData/CPP/CPPintroductionED';
import { CPPbasic } from 'src/TestData/ExerciseData/CPP/CPPbasicED';
import { CPPintermediate } from 'src/TestData/ExerciseData/CPP/CPPintermediate';
import { CPPabintermediate } from 'src/TestData/ExerciseData/CPP/CPPabintermdiate';

//HTML
import { HTMLintroduction } from 'src/TestData/ExerciseData/HTML/HTMLintroductionED';
import { HTMLbasic } from 'src/TestData/ExerciseData/HTML/HTMLbasicED';
import { HTMLintermediate } from 'src/TestData/ExerciseData/HTML/HTMLintermediate';
import { HTMLabintermediate } from 'src/TestData/ExerciseData/HTML/HTMLabintermdiate';

//JS
import { JSbasic } from 'src/TestData/ExerciseData/JAVASCRIPT/JSbasicED';
import { JSintroduction } from 'src/TestData/ExerciseData/JAVASCRIPT/JSintroductionED';
import { JSintermediate } from 'src/TestData/ExerciseData/JAVASCRIPT/JSintermediate';
import { JSabintermediate } from 'src/TestData/ExerciseData/JAVASCRIPT/JSabintermdiate';

//python
import { PYTHONintroduction } from 'src/TestData/ExerciseData/PYTHON/PythonintroductionED';
import { PYTHONbasic } from 'src/TestData/ExerciseData/PYTHON/PythonbasicED';
import { PYTHONintermediate } from 'src/TestData/ExerciseData/PYTHON/Pythonintermediate';
import { PYTHONabintermediate } from 'src/TestData/ExerciseData/PYTHON/Pythonabintermdiate';

//PHP
import { PHPintroduction } from 'src/TestData/ExerciseData/PHP/PHPintroductionED';
import { PHPbasic } from 'src/TestData/ExerciseData/PHP/PHPbasicED';
import { PHPintermediate } from 'src/TestData/ExerciseData/PHP/PHPintermediate';
import { PHPabintermediate } from 'src/TestData/ExerciseData/PHP/PHPabintermdiate';

//JAVA
import { JAVAintroduction } from 'src/TestData/ExerciseData/JAVA/JAVAintroductionED';
import { JAVAbasic } from 'src/TestData/ExerciseData/JAVA/JAVAbasicED';
import { JAVAintermediate } from 'src/TestData/ExerciseData/JAVA/JAVAntermediate';
import { JAVAabintermediate } from 'src/TestData/ExerciseData/JAVA/JAVAabintermdiate';

//SQL
import { SQLintroduction } from 'src/TestData/ExerciseData/SQL/SQLintroductionED';
import { SQLbasic } from 'src/TestData/ExerciseData/SQL/SQLbasicED';
import { SQLintermediate } from 'src/TestData/ExerciseData/SQL/SQLintermediate';
import { SQLabintermediate } from 'src/TestData/ExerciseData/SQL/SQLabintermdiate';

//CSS
import { CSSintroduction } from 'src/TestData/ExerciseData/CSS/CSSintroductionED';
import { CSSbasic } from 'src/TestData/ExerciseData/CSS/CSSbasicED';
import { CSSintermediate } from 'src/TestData/ExerciseData/CSS/CPPintermediate';
import { CSSabintermediate } from 'src/TestData/ExerciseData/CSS/CSSabintermdiate';

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


  isHtml = false;
  isCss = false

  exercise = HTMLbasic;

  completeExercise = false;
  
  exercises: any ={};
  currentExerciseIndex = 0;

  showAnswer = false;

  constructor(private cdr:ChangeDetectorRef, private router: Router) { }

  ngOnInit() {
    this.loadExercise()
  }

  ngOnchanges(){
    
    this.loadExercise();
  }

  returnToMenu(){
    this.router.navigate(['/exercise-selector'])
  }

  loadExercise(){
    if(this.lang === "HTML"){
 
      switch(this.difficulty){
        case "Intro":
          this.exercises = [...HTMLintroduction].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;
        case "Basic":
          this.exercises = [...HTMLbasic].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;

        case "Intermediate":
          this.exercises = [...HTMLintermediate].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;
        
        case "AbIntermediate":
          this.exercises = [...HTMLabintermediate].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;

        default:
          this.exercises = [];
          break;
        
      }
    }

    else if(this.lang === "CSS"){
      switch(this.difficulty){
        case "Intro":
          this.exercises = [...CSSintroduction].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;

        case "Basic":
          this.exercises = [...CSSbasic].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;

        case "Intermediate":
          this.exercises = [...CSSintermediate].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;
        
        case "AbIntermediate":
          this.exercises = [...CSSabintermediate].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;

        default:
          this.exercises = [];
          break
      }
    }

    else if(this.lang === "Python"){
      switch(this.difficulty){
        case "Intro":
          this.exercises = [...PYTHONintroduction].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;

        case "Basic":
          this.exercises = [...PYTHONbasic].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;

        case "Intermediate":
          this.exercises = [...PYTHONintermediate].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;
        
        case "AbIntermediate":
          this.exercises = [...PYTHONabintermediate].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;
          
        default:
          this.exercises = [];
          break
      }
    }

    else if(this.lang === "Javascript"){
      switch(this.difficulty){
        case "Intro":
          this.exercises = [...JSintroduction].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;

        case "Basic":
          this.exercises = [...JSbasic].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;

        case "Intermediate":
          this.exercises = [...JSintermediate].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;
        
        case "AbIntermediate":
          this.exercises = [...JSabintermediate].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;
          
        default:
          this.exercises = [];
          break
      }
    }

    else if(this.lang === "PHP"){
      switch(this.difficulty){
        case "Intro":
          this.exercises = [...PHPintroduction].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;

        case "Basic":
          this.exercises = [...PHPbasic].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;

        case "Intermediate":
          this.exercises = [...PHPintermediate].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;
        
        case "AbIntermediate":
          this.exercises = [...PHPabintermediate].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;
          
        default:
          this.exercises = [];
          break
      }
    }


    else if(this.lang === "CPP"){
      switch(this.difficulty){
        case "Intro":
          this.exercises = [...CPPintro].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;

        case "Basic":
          this.exercises = [...CPPbasic].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;

        case "Intermediate":
          this.exercises = [...CPPintermediate].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;
        
        case "AbIntermediate":
          this.exercises = [...CPPabintermediate].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;
          
        default:
          this.exercises = [];
          break
      }
    }


    else if(this.lang === "Java"){
      switch(this.difficulty){
        case "Intro":
          this.exercises = [...JAVAintroduction].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;

        case "Basic":
          this.exercises = [...JAVAbasic].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;

        case "Intermediate":
          this.exercises = [...JAVAintermediate].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;
        
        case "AbIntermediate":
          this.exercises = [...JAVAabintermediate].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;
          
        default:
          this.exercises = [];
          break
      }
    }


    else if(this.lang === "SQL"){
      switch(this.difficulty){
        case "Intro":
          this.exercises = [...SQLintroduction].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;

        case "Basic":
          this.exercises = [...SQLbasic].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;

        case "Intermediate":
          this.exercises = [...SQLintermediate].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;
        
        case "AbIntermediate":
          this.exercises = [...SQLabintermediate].sort(()=> 0.5 - Math.random()).slice(0,5);
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
      this.completeExercise = false;
      
    }
  }

  /*

  nextExercise(){
    console.log('Before Increment - Current Index:', this.currentExerciseIndex);
    console.log('Exercise Length:', this.exercises.length);    
    if(this.currentExerciseIndex < this.exercises.length - 1){
      this.currentExerciseIndex++;
      console.log('After Increment - Current Index:', this.currentExerciseIndex);
      this.cdr.detectChanges(); // Ensure Angular updates the view
      setTimeout(() => Prism.highlightAll(), 0); // Highlight code after view update
      this.showAnswer = false;
    }
    else{
      console.log("fin")
      this.completeExercise = true;
      this.cdr.detectChanges();
    }
  }

  */

  /*
  nextExercise() {
    console.log('Before Increment - Current Index:', this.currentExerciseIndex);
    console.log('Exercise Length:', this.exercises.length);
    
    if(this.currentExerciseIndex === this.exercises.length - 1){
      console.log("fin - Complete");
      this.completeExercise = true;
      this.cdr.detectChanges(); // Ensure the view is updated
      console.log("completeExercise is now:", this.completeExercise);
    }
    if (this.currentExerciseIndex < this.exercises.length - 1) {
      this.currentExerciseIndex++;
      console.log('After Increment - Current Index:', this.currentExerciseIndex);
      
      this.cdr.detectChanges(); // Ensure Angular updates the view
      setTimeout(() => Prism.highlightAll(), 0); // Highlight code after view update
      this.showAnswer = false;
    } 
  }
  */


  nextExercise() {
    console.log('Before Increment - Current Index:', this.currentExerciseIndex);
    console.log('Exercise Length:', this.exercises.length);
  

  

    if (this.currentExerciseIndex < this.exercises.length - 1) {
      this.currentExerciseIndex++;
      console.log('After Increment - Current Index:', this.currentExerciseIndex);
      this.cdr.detectChanges(); // Ensure Angular updates the view
      setTimeout(() => Prism.highlightAll(), 0); // Highlight code after view update
      this.showAnswer = false;

      if(this.currentExerciseIndex === this.exercises.length - 1){
        console.log("fin - Complete");
        this.completeExercise = true;
        this.cdr.detectChanges(); // Ensure the view is updated
        console.log("completeExercise is now:", this.completeExercise);
      }
    }
  }
  

  toggleAnswer() {
    this.showAnswer = !this.showAnswer; // Toggle answer visibility
  }




}
