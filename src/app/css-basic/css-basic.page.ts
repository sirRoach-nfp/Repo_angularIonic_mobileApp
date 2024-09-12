import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-css-basic',
  templateUrl: './css-basic.page.html',
  styleUrls: ['./css-basic.page.scss'],
})
export class CssBasicPage implements OnInit {

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
  }

  toggleSubtopics() {
    this.showSubtopics = !this.showSubtopics;
  }

  
  constructor(private menu: MenuController) {

  }

  closeMenu() {
      this.menu.close();
  }

  ngOnInit() {
  }

}
