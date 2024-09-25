import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JsStatementsPageRoutingModule } from './js-statements-routing.module';

import { JsStatementsPage } from './js-statements.page';
import { SharedModule } from 'src/component/shared-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JsStatementsPageRoutingModule,
    SharedModule
  ],
  declarations: [JsStatementsPage]
})
export class JsStatementsPageModule {}
