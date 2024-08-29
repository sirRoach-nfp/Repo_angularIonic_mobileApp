import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HtmlbasicPageRoutingModule } from './htmlbasic-routing.module';

import { HtmlbasicPage } from './htmlbasic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HtmlbasicPageRoutingModule
  ],
  declarations: [HtmlbasicPage]
})
export class HtmlbasicPageModule {}
