import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { lessonData} from 'src/TestData/lesson';
@Component({
  selector: 'app-page-test',
  templateUrl: './page-test.page.html',
  styleUrls: ['./page-test.page.scss'],
})
export class PageTestPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  /*
  lessonData = lessonData;
  lesson = lessonData[0];
  lessonIndex = 0;
  lessonImages: string[] = this.lesson.images;
  */
  lessonData = lessonData
  lesson: any = {};
  lessonImages: string[]=[];
  lessonIndex: number = 0;



  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const topic = params['topic'];
      this.loadLesson(topic);
    })
  }



  private loadLesson(topic:string):void{
    this.lesson = lessonData.find(item=> item.topic === topic) || {};
    this.lessonImages=this.lesson.images || [];
  }

  previousLesson(){
    if(this.lessonIndex>0){
      this.lessonIndex--;
      this.loadLesson(lessonData[this.lessonIndex].topic);
    }
  }

  nextLesson() {
    if (this.lessonIndex < lessonData.length - 1) {
      this.lessonIndex++;
      this.loadLesson(lessonData[this.lessonIndex].topic);
    }
  }

  /*

  nextLesson(){
    if(this.lessonIndex < lessonData.length - 1){
      this.lessonIndex++;
      this.lesson = lessonData[this.lessonIndex];
      this.lessonImages = this.lesson.images;

    }
  }

  previousLesson(){
    if(this.lessonIndex > 0){
      this.lessonIndex--;
      this.lesson = lessonData[this.lessonIndex]
      this.lessonImages = this.lesson.images;
    }
  }
  */

}
