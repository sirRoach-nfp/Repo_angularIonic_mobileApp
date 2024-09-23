import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JsOutputPageRoutingModule } from './js-output-routing.module';

import { JsOutputPage } from './js-output.page';
import { SharedModule } from 'src/component/shared-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JsOutputPageRoutingModule,
    SharedModule
  ],
  declarations: [JsOutputPage]
})
export class JsOutputPageModule {}
