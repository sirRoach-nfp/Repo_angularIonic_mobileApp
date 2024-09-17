import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sqlsyntax',
  templateUrl: './sqlsyntax.page.html',
  styleUrls: ['./sqlsyntax.page.scss'],
})
export class SqlsyntaxPage {
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
