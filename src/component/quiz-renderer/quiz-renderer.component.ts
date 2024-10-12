import { Component, OnInit,Input } from '@angular/core';

//HTML
import { HTMLintroQD } from 'src/TestData/QuizData/HTML/HTMLintroQD';
import { HTMLbasicQD } from 'src/TestData/QuizData/HTML/HTMLbasicQD';
import { HtmlIntermediateQD } from 'src/TestData/QuizData/HTML/HTMLintermediateQD';
import { HtmlabintermediateQD3 } from 'src/TestData/QuizData/HTML/HTMLabintermediateQD';

//CSS
import { CSSintroQD } from 'src/TestData/QuizData/CSS/CSSintroQD';
import { CSSbasicQD } from 'src/TestData/QuizData/CSS/CSSbasicQD';
import { CssabintermediateQD3 } from 'src/TestData/QuizData/CSS/CSSabintermediateQD';
import { CssintermediateQD4 } from 'src/TestData/QuizData/CSS/CSSintermediateQD';
//Python
import { pythonIntroQD } from 'src/TestData/QuizData/PYTHON/PYTHONintroQD';
import { pythonBasicQD } from 'src/TestData/QuizData/PYTHON/PYTHONbasicQD';
import { pythonintermediateQD } from 'src/TestData/QuizData/PYTHON/PYTHONintermediateQD';
import { pythonabintermediateQD } from 'src/TestData/QuizData/PYTHON/PYTHONabintermediateQD';

//Javascript
import { JSintroQD } from 'src/TestData/QuizData/JAVASCRIPT/JSintroQD';
import { JSbasicQD } from 'src/TestData/QuizData/JAVASCRIPT/JSbasicQD';
import { jsintermediateQD } from 'src/TestData/QuizData/JAVASCRIPT/JSintermediateQD';
import { jsabintermediateQD } from 'src/TestData/QuizData/JAVASCRIPT/JSabintermediateQD';

//Java
import { JavaintroQD } from 'src/TestData/QuizData/JAVA/JAVAintroQD';
import { JavabasicQD } from 'src/TestData/QuizData/JAVA/JAVAbasicQD';
import { JavaIntermediateQD} from 'src/TestData/QuizData/JAVA/JAVAintermediateQD';
import { JavaabintermediateQD } from 'src/TestData/QuizData/JAVA/JAVAabintermediateQD';

//PHP
import { PHPintroQD } from 'src/TestData/QuizData/PHP/PHPintroQD';
import { PHPbasicQD } from 'src/TestData/QuizData/PHP/PHPbasicQD';
import { PHPintermediateQD } from 'src/TestData/QuizData/PHP/PHPintermediateQD';
import { PHPabintermediateQD } from 'src/TestData/QuizData/PHP/PHPabintermediateQD';

//c++
import { CppIntroQD } from 'src/TestData/QuizData/CPP/CPPintroQD';
import { CppBasicQD } from 'src/TestData/QuizData/CPP/CPPbasicQD';
import { CppintermediateQD } from 'src/TestData/QuizData/CPP/CPPintermediateQD';
import { CppabintermediateQD3 } from 'src/TestData/QuizData/CPP/CPPabintermediateQD';

//SQL
import { SQLbasicQD } from 'src/TestData/QuizData/SQL/SQLbasicQD';
import { SQLintroductionQD } from 'src/TestData/QuizData/SQL/SQLintroductionQD';
import { SQLintermediateQD } from 'src/TestData/QuizData/SQL/SQLintermediateQD';
import { SQLabintermediateQD } from 'src/TestData/QuizData/SQL/SQLabintermediateQD';




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

  username: string | null = "";

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

  returnToHome(){
    this.router.navigate(['/home'])
  }

  ngOnInit() {
    this.loadQuiz();
    console.log("TEST")
    console.log("lang: " + this.lang + " || " + "dif: " + this.diff)
    this.username = localStorage.getItem("username");
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
          this.quizData = [...HTMLbasicQD].sort(()=> 0.5 - Math.random()).slice(0,10);
          break;
        
        case "Intermediate":
          this.quizData = [...HtmlIntermediateQD].sort(()=> 0.5 - Math.random()).slice(0,10);
          break;

        case "AbIntermediate":
          this.quizData = [...HtmlabintermediateQD3].sort(()=> 0.5 - Math.random()).slice(0,15);
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

        case "Intermediate":
          this.quizData = [...CssintermediateQD4].sort(()=> 0.5 - Math.random()).slice(0,10);
          break;

        case "AbIntermediate":
          this.quizData = [...CssabintermediateQD3].sort(()=> 0.5 - Math.random()).slice(0,10);
          break;


        default:
          this.quizData = []
          break
        
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

        case "Intermediate":
          this.quizData = [...pythonintermediateQD].sort(()=> 0.5 - Math.random()).slice(0,10);
          break;

        case "AbIntermediate":
          this.quizData = [...pythonabintermediateQD].sort(()=> 0.5 - Math.random()).slice(0,10);
          break;


        default:
          this.quizData = []
          break
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

        case "Intermediate":
          this.quizData = [...jsintermediateQD].sort(()=> 0.5 - Math.random()).slice(0,10);
          break;

        case "AbIntermediate":
          this.quizData = [...jsabintermediateQD].sort(()=> 0.5 - Math.random()).slice(0,10);
          break;


        default:
          this.quizData = []
          break
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

        case "Intermediate":
          this.quizData = [...PHPintermediateQD].sort(()=> 0.5 - Math.random()).slice(0,10);
          break;

        case "AbIntermediate":
          this.quizData = [...PHPabintermediateQD].sort(()=> 0.5 - Math.random()).slice(0,10);
          break;


        default:
          this.quizData = []
          break
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
        
        case "Intermediate":
          this.quizData = [...CppintermediateQD].sort(()=> 0.5 - Math.random()).slice(0,10);
          break;

        case "AbIntermediate":
          this.quizData = [...CppabintermediateQD3].sort(()=> 0.5 - Math.random()).slice(0,10);
          break;


        default:
          this.quizData = []
          break
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
        case "Intermediate":
          this.quizData = [...JavaIntermediateQD].sort(()=> 0.5 - Math.random()).slice(0,10);
          break;

        case "AbIntermediate":
          this.quizData = [...JavaabintermediateQD].sort(()=> 0.5 - Math.random()).slice(0,10);
          break;


        default:
          this.quizData = []
          break
      }
    }


    if(this.lang === "SQL"){
      switch(this.diff){
        case "Intro":
          this.quizData = [...SQLintroductionQD].sort(()=>0.5 - Math.random()).slice(0,5)
          break;
        case "Basic":
          this.quizData = [...SQLbasicQD].sort(()=>0.5 - Math.random()).slice(0,10)
          break;
        
        case "Intermediate":
          this.quizData = [...SQLintermediateQD].sort(()=> 0.5 - Math.random()).slice(0,10);
          break;

        case "AbIntermediate":
          this.quizData = [...SQLabintermediateQD].sort(()=> 0.5 - Math.random()).slice(0,10);
          break;


        default:
          this.quizData = []
          break
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
