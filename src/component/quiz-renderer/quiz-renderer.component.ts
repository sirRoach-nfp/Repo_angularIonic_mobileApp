import { Component, OnInit,Input } from '@angular/core';

import { HTMLintroQD } from 'src/TestData/QuizData/HTML/HTMLintroQD';

//CSS
import { CSSintroQD } from 'src/TestData/QuizData/CSS/CSSintroQD';
import { CSSbasicQD } from 'src/TestData/QuizData/CSS/CSSbasicQD';


//Python
import { pythonIntroQD } from 'src/TestData/QuizData/PYTHON/PYTHONintroQD';
import { pythonBasicQD } from 'src/TestData/QuizData/PYTHON/PYTHONbasicQD';

//Javascript
import { JSintroQD } from 'src/TestData/QuizData/JAVASCRIPT/JSintroQD';
import { JSbasicQD } from 'src/TestData/QuizData/JAVASCRIPT/JSbasicQD';

//Java
import { JavaintroQD } from 'src/TestData/QuizData/JAVA/JAVAintroQD';
import { JavabasicQD } from 'src/TestData/QuizData/JAVA/JAVAbasicQD';

//PHP
import { PHPintroQD } from 'src/TestData/QuizData/PHP/PHPintroQD';
import { PHPbasicQD } from 'src/TestData/QuizData/PHP/PHPbasicQD';


//c++
import { CppIntroQD } from 'src/TestData/QuizData/CPP/CPPintroQD';
import { CppBasicQD } from 'src/TestData/QuizData/CPP/CPPbasicQD';

import { Router } from '@angular/router';

interface QuizOption {
  [key: string]: string;
}

interface QuizQuestion {
  question: string;
  options: QuizOption;
  correctAnswer: string;
  explanation: string,
}


@Component({
  selector: 'app-quiz-renderer',
  templateUrl: './quiz-renderer.component.html',
  styleUrls: ['./quiz-renderer.component.scss'],
})
export class QuizRendererComponent  implements OnInit {

  @Input() lang: string = "";
  @Input() diff: string = "";


  quizData: QuizQuestion[] =[];
  currentQuestionIndex = 0;
  //selectedOption: string = '';
  userAnswers: {[key:number]: string}={};
  score = 0;
  quizCompleted = false;
  wrongAnswers:{question:string,selectedAnswer: string, correctAnswer: string,explanation: string}[]=[];


  constructor(private router:Router) { }


  returnToMenu(){
    this.router.navigate(['/exercise-selector'])
  }

  ngOnInit() {
    this.loadQuiz();
    console.log("lang: " + this.lang + " || " + "dif: " + this.diff)
  }

  ngOnchanges(){
    this.loadQuiz();
  }



  loadQuiz(){
    if(this.lang === "HTML"){
      switch(this.diff){
        case "Intro":
          this.quizData = [...HTMLintroQD].sort(()=> 0.5 - Math.random()).slice(0,5);
          break;
        case "Basic":
          this.quizData = [...HTMLintroQD].sort(()=> 0.5 - Math.random()).slice(0,10);
          break;

        default:
          this.quizData = []
          break
      }
    }

    if(this.lang === "CSS"){
      switch(this.diff){
        case "Intro":
          this.quizData = [...CSSintroQD].sort(()=>0.5 - Math.random()).slice(0,5)
          break;
        case "Basic":
          this.quizData = [...CSSbasicQD].sort(()=>0.5 - Math.random()).slice(0,10)
          break;
      }
    }

    if(this.lang === "Python"){
      switch(this.diff){
        case "Intro":
          this.quizData = [...pythonIntroQD].sort(()=>0.5 - Math.random()).slice(0,5)
          break;
        case "Basic":
          this.quizData = [...pythonBasicQD].sort(()=>0.5 - Math.random()).slice(0,10)
          break;
      }
    }


    if(this.lang === "Javascript"){
      switch(this.diff){
        case "Intro":
          this.quizData = [...JSintroQD].sort(()=>0.5 - Math.random()).slice(0,5)
          break;
        case "Basic":
          this.quizData = [...JSbasicQD].sort(()=>0.5 - Math.random()).slice(0,10)
          break;
      }
    }


    if(this.lang === "PHP"){
      switch(this.diff){
        case "Intro":
          this.quizData = [...PHPintroQD].sort(()=>0.5 - Math.random()).slice(0,5)
          break;
        case "Basic":
          this.quizData = [...PHPbasicQD].sort(()=>0.5 - Math.random()).slice(0,10)
          break;
      }
    }


    if(this.lang === "CPP"){
      switch(this.diff){
        case "Intro":
          this.quizData = [...CppIntroQD].sort(()=>0.5 - Math.random()).slice(0,5)
          break;
        case "Basic":
          this.quizData = [...CppBasicQD].sort(()=>0.5 - Math.random()).slice(0,10)
          break;
      }
    }



    if(this.lang === "Java"){
      switch(this.diff){
        case "Intro":
          this.quizData = [...JavaintroQD].sort(()=>0.5 - Math.random()).slice(0,5)
          break;
        case "Basic":
          this.quizData = [...JavabasicQD].sort(()=>0.5 - Math.random()).slice(0,10)
          break;
      }
    }






  }


  selectAnswer(option:string){
    this.userAnswers[this.currentQuestionIndex] = option;
  }

  nextQuestion(){
    if(this.currentQuestionIndex < this.quizData.length - 1){
      this.currentQuestionIndex++;
    }
  }

  prevQuestion(){
    if(this.currentQuestionIndex > 0){
      this.currentQuestionIndex--;
    }
  }


  
  submitQuiz() {

    this.wrongAnswers = [];
    this.score = this.quizData.reduce((acc, question, index) => {
      const userAnswer = this.userAnswers[index];
      if (userAnswer === question.correctAnswer) {
        return acc + 1;
      } else {
        // Record wrong answer
        this.wrongAnswers.push({
          question: question.question,
          selectedAnswer: userAnswer,
          correctAnswer: question.correctAnswer,
          explanation: question.explanation,
        });
        return acc;
      }
    }, 0);
    
    this.quizCompleted = true;
    console.log(this.quizCompleted);



    /*
    this.score = this.quizData.reduce((acc, question, index) => {
      return acc + (this.userAnswers[index] === question.correctAnswer ? 1 : 0);
    }, 0);
    this.quizCompleted = true;
    console.log(this.quizCompleted)
    */
  }


  isLastQuestion(){
    return this.currentQuestionIndex === this.quizData.length - 1;
  }



}
