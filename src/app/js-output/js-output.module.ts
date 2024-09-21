import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JsOutputPageRoutingModule } from './js-output-routing.module';

import { JsOutputPage } from './js-output.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JsOutputPageRoutingModule
  ],
  declarations: [JsOutputPage]
})
export class JsOutputPageModule {}
