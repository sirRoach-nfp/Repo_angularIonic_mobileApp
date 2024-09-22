import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { blogData } from 'src/TestData/blogData';
@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.page.html',
  styleUrls: ['./search-result-page.page.scss'],
})
export class SearchResultPagePage implements OnInit {

  constructor(private router:ActivatedRoute) { }

  query:string = "";



  blogData = blogData
  blog: any = {};
  blogImages:string[]=[];



  private loadLesson():void{
    console.log(blogData)
    this.blog = this.blogData[0];
    this.blogImages=this.blog.images || [];
    console.log(this.blogImages)
  }






  ngOnInit() {
    
    this.router.queryParams.subscribe(params=>{
      this.query = params['searchQuery']
      console.log(params['searchQuery'])

    })

    this.loadLesson()
  }

}
