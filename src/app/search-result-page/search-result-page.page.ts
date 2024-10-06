import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { blogData } from 'src/TestData/blogData';
import { NavController } from '@ionic/angular';
import { FirebaseService } from '../firebase.service';



@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.page.html',
  styleUrls: ['./search-result-page.page.scss'],
})
export class SearchResultPagePage implements OnInit {

  constructor(private router:ActivatedRoute, private apiService : ApiService, private navCtrl: NavController,private firebaseService:FirebaseService) { }

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

/*
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



*/

private fetchBlog(blogID: string): void {
  this.firebaseService.fetchBlogByField(blogID).subscribe(
    (response: any[]) => {
      if (response && response.length > 0) {
        this.blog = response[0];  // Assuming you want the first matching blog
        console.log('Fetched Blog:', this.blog);
        this.isLoading = false;
      } else {
        console.log('No blog found with the given blogID');
        this.isLoading = false;
      }
    },
    (error) => {
      console.error('Error fetching blog:', error);
      this.isLoading = false;
    }
  );
}



  ngOnInit() {
    
    this.router.queryParams.subscribe(params=>{
      this.blogId = params['blogId']
      this.query = params['searchQuery']
      console.log("blogId " + this.blogId)

    })

    if(this.blogId){
      this.fetchBlog(this.blogId);
      console.log(this.blog)
    }

    //this.loadLesson()
  }

}
