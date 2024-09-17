import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sql',
  templateUrl: './sql.page.html',
  styleUrls: ['./sql.page.scss'],
})
export class SqlPage{
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
