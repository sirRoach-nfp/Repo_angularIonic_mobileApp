import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-your-modal',
  template: `
    <ion-content class="popup-container">
      <div class="popup-content">
        <ion-buttons class="back">
          <ion-icon name="arrow-back-outline" slot="start" (click)="closePopup()"></ion-icon>
        </ion-buttons>

        <ion-item>
          <ion-icon slot="start" name="person-outline"></ion-icon>
          <ion-header>
            <ion-card-title>{{username}}</ion-card-title>
            <ion-card-subtitle>{{email}}</ion-card-subtitle>
          </ion-header>
        </ion-item>

        <ion-button class="ion-close" (click)="handleLogout()" *ngIf="isLoggedIn">LOGOUT -></ion-button>
        <ion-button class="ion-close" *ngIf="!isLoggedIn" (click)="redirectLogin()">LOGIN -></ion-button>
      </div>
    </ion-content>
  `
})
export class YourModalComponent {
  @Input() username: string = '';
  @Input() email: string = '';
  @Input() isLoggedIn: boolean = false;

  constructor(private modalController: ModalController) {}

  async closePopup() {
    await this.modalController.dismiss(); // Dismiss the modal
  }

  async handleLogout() {
    await this.closePopup(); 
    // Handle logout logic here
  }

  async redirectLogin() {
    await this.closePopup();
    // Redirect logic here
  }
}
