import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JsWheretoPageRoutingModule } from './js-whereto-routing.module';

import { JsWheretoPage } from './js-whereto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JsWheretoPageRoutingModule
  ],
  declarations: [JsWheretoPage]
})
export class JsWheretoPageModule {}
