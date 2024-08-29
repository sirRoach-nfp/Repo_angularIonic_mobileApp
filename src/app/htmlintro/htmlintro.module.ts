import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HtmlintroPageRoutingModule } from './htmlintro-routing.module';

import { HtmlintroPage } from './htmlintro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HtmlintroPageRoutingModule
  ],
  declarations: [HtmlintroPage]
})
export class HtmlintroPageModule {}
