import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-css',
  templateUrl: './css.page.html',
  styleUrls: ['./css.page.scss'],
})
export class CssPage implements OnInit {

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

  ngOnInit() {
  }

}
