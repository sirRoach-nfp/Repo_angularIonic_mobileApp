import { Component, OnInit,Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router,NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent  implements OnInit, OnChanges, OnDestroy {

  @Input() id: string = ""
  uniqueId: string = ""
  routerSubscription: Subscription | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id']) {
      this.uniqueId = changes['id'].currentValue;
      console.log('Updated uniqueId:', this.uniqueId); // Check if the value is updating
    }
  }

  ngOnDestroy(){
  

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
  }

  closePopup() {
    this.isPopupVisible = false;
    console.log("tst")
  }

  toggleSubtopics() {
    this.showSubtopics = !this.showSubtopics;
  }

  constructor(private menu: MenuController, private router: Router) {}

  closeMenu() {
      this.menu.close();
      console.log("test")
  }

  

  ngOnInit() {
    this.uniqueId = this.id;
    console.log('Initial uniqueId:', this.uniqueId);

    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        //this.clearUniqueId(); // Clear the uniqueId on navigation end
        this.menu.enable(true, this.uniqueId); // Enable the menu with the updated uniqueId
      }
    });

    // Subscribe to Router events to clear the uniqueId when the route changes

  }



  html(){
    this.router.navigate(['/html'])
    
    //this.closeMenu()
  }

  css(){
    this.router.navigate(['/css'])
  }

  python(){
    this.router.navigate(['/py'])
  }

  javascript(){
    this.router.navigate(['/js'])
  }

  sql(){
    this.router.navigate(['/sql'])
  }

  java(){
    this.router.navigate(['/java'])
  }

  php(){
    this.router.navigate(['/php'])
  }

  cpp(){
    this.router.navigate(['/c++'])
  }


  home(){
    this.router.navigate(['/home'])
    
    //this.closeMenu()
  }



  //HTML lessons link

  htmlIntro(){
    this.router.navigate(['/htmlintro'])
    
    //this.closeMenu()
  }

  htmlBasic(){
    this.router.navigate(['/htmlbasic'])
   
    //this.closeMenu()
  }

  htmlElement(){
    this.router.navigate(['/htmlelement'])
    
    //this.closeMenu()
  }

  htmlAttri(){
    this.router.navigate(['/htmlattri'])
    
    //this.closeMenu()
  }

}
