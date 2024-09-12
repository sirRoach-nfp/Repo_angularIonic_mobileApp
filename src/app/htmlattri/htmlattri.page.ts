import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-htmlattri',
  templateUrl: './htmlattri.page.html',
  styleUrls: ['./htmlattri.page.scss'],
})
export class HtmlattriPage {

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
