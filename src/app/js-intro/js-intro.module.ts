import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JsIntroPageRoutingModule } from './js-intro-routing.module';

import { JsIntroPage } from './js-intro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JsIntroPageRoutingModule
  ],
  declarations: [JsIntroPage]
})
export class JsIntroPageModule {}
