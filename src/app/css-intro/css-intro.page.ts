import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-css-intro',
  templateUrl: './css-intro.page.html',
  styleUrls: ['./css-intro.page.scss'],
})
export class CssIntroPage implements OnInit {

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
