import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-htmlbasic',
  templateUrl: './htmlbasic.page.html',
  styleUrls: ['./htmlbasic.page.scss'],
})
export class HtmlbasicPage {

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
