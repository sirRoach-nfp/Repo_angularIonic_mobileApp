import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { FirebaseService } from 'src/app/firebase.service';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit, OnChanges, OnDestroy {


  username: string | null = "";
  email: string | null = " "
  isLoggedIn: boolean | null = false

  // Highlight for active page.
  isActive(route: string): boolean {
    return this.router.url.startsWith(route);
  }

  @Input() id: string = ""
  uniqueId: string = ""
  routerSubscription: Subscription | undefined;



    //search logic
    query: string = "";


    search(){

      if(this.query.trim().length > 0){
        console.log("test" + this.query)
      
        this.router.navigate(['/searchresultpage'], {
          queryParams: {
            searchQuery: this.query,
            //searcQuery: "python",
            prevRoute: this.currentRoute // Replace with the actual search term
          }
        });
      }

    }



    


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id']) {
      this.uniqueId = changes['id'].currentValue;
      console.log('Updated uniqueId:', this.uniqueId); // Check if the value is updating
    }
  }

  ngOnDestroy() {


    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.clearUniqueId(); // Clear the uniqueId when the navigation ends
      }
    });

    this.closeMenu()

    console.log("dewstory")
  }

  clearUniqueId() {
    this.uniqueId = "";
    console.log('Cleared uniqueId:', this.uniqueId); // Check if the value is cleared
  }



  isPopupVisible = false;
  showSubtopics = false;

  showSubTypesHtml = false;
  arrowIconHtml: string = 'caret-forward-outline';

  showSubTypesCss = false;
  arrowIconCss: string = 'caret-forward-outline';

  showSubTypesJs = false;
  arrowIconJs: string = 'caret-forward-outline';

  showSubTypesPy = false;
  arrowIconPy: string = 'caret-forward-outline';

  showSubTypesSQL = false;
  arrowIconSQL: string = 'caret-forward-outline';

  showSubTypesPHP = false;
  arrowIconPHP: string = 'caret-forward-outline';

  showSubTypesJava = false;
  arrowIconJava: string = 'caret-forward-outline';

  showSubTypesCpp = false;
  arrowIconCpp: string = 'caret-forward-outline';


  //
  toggleTypeHtml() {
    this.showSubTypesHtml = !this.showSubTypesHtml;
  }

  toggleArrowHtml() {
    this.arrowIconHtml = this.arrowIconHtml === 'caret-forward-outline' ? 'caret-down-outline' : 'caret-forward-outline';
  }
  //

  //
  toggleTypeCss() {
    this.showSubTypesCss = !this.showSubTypesCss;
  }

  toggleArrowCss() {
    this.arrowIconCss = this.arrowIconCss === 'caret-forward-outline' ? 'caret-down-outline' : 'caret-forward-outline';
  }
  //

  //
  toggleTypeJs() {
    this.showSubTypesJs = !this.showSubTypesJs;
  }

  toggleArrowJs() {
    this.arrowIconJs = this.arrowIconJs === 'caret-forward-outline' ? 'caret-down-outline' : 'caret-forward-outline';
  }
  //

  //
  toggleTypePy() {
    this.showSubTypesPy = !this.showSubTypesPy;
  }

  toggleArrowPy() {
    this.arrowIconPy = this.arrowIconPy === 'caret-forward-outline' ? 'caret-down-outline' : 'caret-forward-outline';
  }
  //

  //
  toggleTypeSQL() {
    this.showSubTypesSQL = !this.showSubTypesSQL;
  }

  toggleArrowSQL() {
    this.arrowIconSQL = this.arrowIconSQL === 'caret-forward-outline' ? 'caret-down-outline' : 'caret-forward-outline';
  }
  //

  //
  toggleTypePHP() {
    this.showSubTypesPHP = !this.showSubTypesPHP;
  }

  toggleArrowPHP() {
    this.arrowIconPHP = this.arrowIconPHP === 'caret-forward-outline' ? 'caret-down-outline' : 'caret-forward-outline';
  }
  //

  //
  toggleTypeJava() {
    this.showSubTypesJava = !this.showSubTypesJava;
  }

  toggleArrowJava() {
    this.arrowIconJava = this.arrowIconJava === 'caret-forward-outline' ? 'caret-down-outline' : 'caret-forward-outline';
  }
  //

  //
  toggleTypeCpp() {
    this.showSubTypesCpp = !this.showSubTypesCpp;
  }

  toggleArrowCpp() {
    this.arrowIconCpp = this.arrowIconCpp === 'caret-forward-outline' ? 'caret-down-outline' : 'caret-forward-outline';
  }
  //


  
  showPopup() {
    this.isPopupVisible = true;
    console.log("clicked pop")
  }
  


  

  

  async closePopup() {
    this.isPopupVisible = false;
    //await this.modalController.dismiss();
    console.log("tst")

   
 
  }

  logout(){
    
    localStorage.clear();
    
    this.router.navigate(['/loginpage'])
  }

  
  async handleLogout() {
    await this.closePopup(); 
    try {
      await this.firebaseService.logout(); 
      localStorage.clear();
      this.router.navigate(['/login']); 
    } catch (error) {
      console.error('Error during logout:', error);
    
    }
  }

  async redirectLogin(){
    await this.closePopup()
    this.router.navigate(['/loginpage'])

  } 
  
  justTest(){
    console.log("poptest")
  }

  toggleSubtopics() {
    this.showSubtopics = !this.showSubtopics;
  };

  constructor(private menu: MenuController, private router: Router, private activatedRoute: ActivatedRoute,private firebaseService:FirebaseService,private modalController:ModalController) {


  }




  closeMenu() {
    this.menu.close();
    console.log("test")
  }


  currentRoute: String = '';
  ngOnInit() {

    this.username = localStorage.getItem("username")
    this.email = localStorage.getItem("email")
    if(localStorage.getItem("isLogged") === "true"){
      this.isLoggedIn = true;
    }

    this.uniqueId = this.id;
    console.log('Initial uniqueId:', this.uniqueId);

    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        //this.clearUniqueId(); // Clear the uniqueId on navigation end
        this.menu.enable(true, this.uniqueId); // Enable the menu with the updated uniqueId
      }
    });

    // Subscribe to Router events to clear the uniqueId when the route changes


    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.currentRoute = this.router.url;
      console.log(this.currentRoute); // To check the current route
    });

  }



  challenges(){

    const isLogged = localStorage.getItem("isLogged")


    if(isLogged === "true"){
      this.router.navigate(['/exercise-selector'])
    }
    else{
      this.router.navigate(['/loginpage'])
    }
    
  }


  html() {
    this.router.navigate(['/html'])

    //this.closeMenu()
  }


  css() {
    this.router.navigate(['/css'])

  }

  python() {
    this.router.navigate(['/py'])
  }

  javascript() {
    this.router.navigate(['/js'])
  }

  sql() {
    this.router.navigate(['/sql'])
  }

  java() {
    this.router.navigate(['/java'])
  }

  php() {
    this.router.navigate(['/php'])
  }

  cpp() {
    this.router.navigate(['/cpp'])
  }


  home() {
    this.router.navigate(['/home'])

    //this.closeMenu()
  }



  //HTML lessons link

  htmlIntro() {
    this.router.navigate(['/htmlintro'])

    //this.closeMenu()
  }

  htmlBasic() {
    this.router.navigate(['/htmlbasic'])

    //this.closeMenu()
  }

  htmlElement() {
    this.router.navigate(['/htmlelement'])

    //this.closeMenu()
  }

  htmlAttri() {
    this.router.navigate(['/htmlattri'])

    //this.closeMenu()
  }



  //CSS lessons link

  cssIntro() {
    this.router.navigate(['/css-intro'])

    //this.closeMenu()
  }

  cssBasic() {
    this.router.navigate(['/css-basic'])

    //this.closeMenu()
  }

  cssElement() {
    this.router.navigate(['/css-element'])

    //this.closeMenu()
  }

  cssAttributes() {
    this.router.navigate(['/css-attributes'])

    //this.closeMenu()
  }


  //JAVASCRRIPT lessons link

  jsIntro() {
    this.router.navigate(['/js-intro'])

    //this.closeMenu()
  }

  jsBasic() {
    this.router.navigate(['/js-output'])

    //this.closeMenu()
  }

  jsElement() {
    this.router.navigate(['/js-statements'])

    //this.closeMenu()
  }

  jsAttributes() {
    this.router.navigate(['/js-whereto'])

    //this.closeMenu()
  }



  //PYTHON lessons link

  pyIntro() {
    this.router.navigate(['/pyintro'])

    //this.closeMenu()
  }

  pyGetstarted() {
    this.router.navigate(['/pygetstarted'])

    //this.closeMenu()
  }

  pySyntax() {
    this.router.navigate(['/pysyntax'])

    //this.closeMenu()
  }

  pyVariables() {
    this.router.navigate(['/pyvariables'])

    //this.closeMenu()
  }


  //SQL lessons link

  sqlIntro() {
    this.router.navigate(['/sqlintro'])

    //this.closeMenu()
  }

  sqlSyntax() {
    this.router.navigate(['/sqlsyntax'])

    //this.closeMenu()
  }

  sqlSelect() {
    this.router.navigate(['/pysyntax'])

    //this.closeMenu()
  }

  sqlInsert() {
    this.router.navigate(['/sqlinsert'])

    //this.closeMenu()
  }




  //SQL lessons link

  phpIntro() {
    this.router.navigate(['/phpintro'])

    //this.closeMenu()
  }

  phpSyntax() {
    this.router.navigate(['/phpsyntax'])

    //this.closeMenu()
  }

  phpVariables() {
    this.router.navigate(['/phpvariables'])

    //this.closeMenu()
  }

  phpEcho() {
    this.router.navigate(['/phpecho'])

    //this.closeMenu()
  }


  //SQL lessons link

  cppIntro() {
    this.router.navigate(['/cppintro'])

    //this.closeMenu()
  }

  cppSyntax() {
    this.router.navigate(['/cppSyntax'])

    //this.closeMenu()
  }

  cppOutput() {
    this.router.navigate(['/cppOutput'])

    //this.closeMenu()
  }

  cppVariables() {
    this.router.navigate(['/cppVariables'])

    //this.closeMenu()
  }


  //SQL lessons link

  javaIntro() {
    this.router.navigate(['/javaintro'])

    //this.closeMenu()
  }

  javaGetStarted() {
    this.router.navigate(['/javagetstarted'])

    //this.closeMenu()
  }

  javaSyntax() {
    this.router.navigate(['/javasyntax'])

    //this.closeMenu()
  }

  jaVariables() {
    this.router.navigate(['/javavariables'])

    //this.closeMenu()
  }



}