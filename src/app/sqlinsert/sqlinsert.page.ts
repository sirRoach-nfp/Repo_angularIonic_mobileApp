import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sqlinsert',
  templateUrl: './sqlinsert.page.html',
  styleUrls: ['./sqlinsert.page.scss'],
})
export class SqlinsertPage {

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
