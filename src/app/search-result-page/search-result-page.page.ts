import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { blogData } from 'src/TestData/blogData';
import { NavController } from '@ionic/angular';




@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.page.html',
  styleUrls: ['./search-result-page.page.scss'],
})
export class SearchResultPagePage implements OnInit {

  constructor(private router:ActivatedRoute, private apiService : ApiService, private navCtrl: NavController) { }

  query:string = "";
  blogId: string ="";



  blogData = blogData
  blog: any = {};
  blogImages:string[]=[];
  formattedDate: string = '';


  isLoading: boolean = true;


  goBack(){
    this.navCtrl.back()
  }

  private loadLesson():void{
    console.log(blogData)
    this.blog = this.blogData[0];
    this.blogImages=this.blog.images || [];
    console.log(this.blogImages)
  }

  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
  }


  private fetchBlog(blogId: string): void {
    this.apiService.fetchBlogById(blogId).subscribe(
      (response) => {
        this.blog = response;  // Store fetched blog data
        this.blogImages = this.blog.images || []; // Update images array if present
        this.formattedDate = this.formatDate(this.blog.createdAt);
        console.log('Fetched Blog:', this.blog);
        this.isLoading = false
      },
      (error) => {
        console.error('Error fetching blog:', error);
      }
    );
  }






  ngOnInit() {
    
    this.router.queryParams.subscribe(params=>{
      this.blogId = params['blogId']
      this.query = params['searchQuery']
      console.log(this.blogId)

    })

    if(this.blogId){
      this.fetchBlog(this.blogId);
      console.log(this.blog)
    }

    //this.loadLesson()
  }

}
