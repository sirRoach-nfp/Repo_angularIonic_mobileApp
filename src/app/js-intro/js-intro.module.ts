import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JsIntroPageRoutingModule } from './js-intro-routing.module';

import { JsIntroPage } from './js-intro.page';
import { SharedModule } from 'src/component/shared-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JsIntroPageRoutingModule,
    SharedModule
  ],
  declarations: [JsIntroPage]
})
export class JsIntroPageModule {}
