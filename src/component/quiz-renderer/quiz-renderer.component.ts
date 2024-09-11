import { Component, OnInit,Input } from '@angular/core';
import { HTMLintroQD } from 'src/TestData/QuizData/HTML/HTMLintroQD';


interface QuizOption {
  [key: string]: string;
}

interface QuizQuestion {
  question: string;
  options: QuizOption;
  correctAnswer: string;
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
  wrongAnswers:{question:string,selectedAnswer: string, correctAnswer: string}[]=[];


  constructor() { }

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
          correctAnswer: question.correctAnswer
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
