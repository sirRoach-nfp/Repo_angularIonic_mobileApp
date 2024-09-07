import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-css-intro',
  templateUrl: './css-intro.page.html',
  styleUrls: ['./css-intro.page.scss'],
})
export class CssIntroPage implements OnInit, AfterViewInit {


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

  changeContent() {
    const demoElement = document.getElementById('demo');
    if (demoElement) {
      demoElement.innerHTML = 'Hello JavaScript!';
    } else {
      console.error('Element with id "demo" not found.');
    }
  }



  ngAfterViewInit() {
    // Ensure the element is available after the view has been initialized
    this.addEventListeners();
  }

  addEventListeners() {
    const turnOnButton = document.querySelector('button[onclick*="LOGO.png"]');
    const turnOffButton = document.querySelector('button[onclick*="GOOGLE-LOGO.png"]');

    if (turnOnButton) {
      turnOnButton.addEventListener('click', () => {
        this.changeImageSrc('myImage', 'assets/img/LOGO.png');
      });
    }

    if (turnOffButton) {
      turnOffButton.addEventListener('click', () => {
        this.changeImageSrc('myImage', 'assets/img/GOOGLE-LOGO.png');
      });
    }
  }

  changeImageSrc(elementId: string, src: string) {
    const imgElement = document.getElementById(elementId) as HTMLImageElement;
    if (imgElement) {
      imgElement.src = src;
    } else {
      console.error(`Element with id "${elementId}" not found.`);
    }
  }


}




