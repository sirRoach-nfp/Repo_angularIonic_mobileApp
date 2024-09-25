import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JsWheretoPageRoutingModule } from './js-whereto-routing.module';

import { JsWheretoPage } from './js-whereto.page';
import { SharedModule } from 'src/component/shared-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JsWheretoPageRoutingModule,
    SharedModule
  ],
  declarations: [JsWheretoPage]
})
export class JsWheretoPageModule {}
