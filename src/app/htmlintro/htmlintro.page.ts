import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-htmlintro',
  templateUrl: './htmlintro.page.html',
  styleUrls: ['./htmlintro.page.scss'],
})
export class HtmlintroPage{

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

}
