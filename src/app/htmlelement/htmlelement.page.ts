import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-htmlelement',
  templateUrl: './htmlelement.page.html',
  styleUrls: ['./htmlelement.page.scss'],
})
export class HtmlelementPage {
  isPopupVisible = false;
  showSubtopics = false;

  showPopup() {
    this.isPopupVisible = true;
  }

  closePopup() {
    this.isPopupVisible = false;
  }

  toggleSubtopics() {
    this.showSubtopics = !this.showSubtopics;
  }

  constructor(private menu: MenuController) {}

  closeMenu() {
      this.menu.close();
  }

}
