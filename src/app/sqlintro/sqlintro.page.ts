import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sqlintro',
  templateUrl: './sqlintro.page.html',
  styleUrls: ['./sqlintro.page.scss'],
})
export class SqlintroPage{

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
