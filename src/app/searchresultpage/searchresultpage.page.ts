import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FirebaseService } from '../firebase.service';
@Component({
  selector: 'app-searchresultpage',
  templateUrl: './searchresultpage.page.html',
  styleUrls: ['./searchresultpage.page.scss'],
})
export class SearchresultpagePage implements OnInit, OnDestroy {


  queryParamsSubscription: Subscription | undefined;


  constructor(private router:ActivatedRoute,private apiService:ApiService, private route: Router,private firebaseService:FirebaseService) { }

  query:string = "";
  prevRoute:string = "";

  searchResults: any[]=[];


  isLoading: boolean = true;


  ngOnInit() {

   this.queryParamsSubscription = this.router.queryParams.subscribe(params => {
      this.query = params['searchQuery'];
      this.prevRoute = params['prevRoute']
      //console.log(this.prevRoute)
      console.log("query" + this.query);

      if (this.query) {
        this.searchBlogs(this.query);  // Pass the query directly
      }
    });


  }


  goPrev(){

    if(this.prevRoute){
      this.route.navigate([this.prevRoute])
    }
    else{
      this.route.navigate(["/home"])
    }
    console.log("prevt" + this.prevRoute)
  }

  ngOnDestroy() {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
      console.log("Query params subscription cleaned up");
    }
    // Optionally clear search results or any other resources
    this.searchResults = [];
    console.log("Component resources cleaned up");
  }


  navigateToBlog(bid: string){

    const isLogged = localStorage.getItem("isLogged");

    if(isLogged === "true"){
      console.log(bid)
      this.route.navigate(['/search-result-page'],{
        queryParams:{
          blogId: bid,
        }
      })
    }
    else{
      this.route.navigate(['/loginpage'])
    }

  }


  async searchBlogs(searchVal: string) {
    this.firebaseService.searchBlogs(searchVal).subscribe(
      (response: any) => {
        console.log(response);
        this.searchResults = response;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching search results', error);
        this.isLoading = false;
      }
    );
  }

}
