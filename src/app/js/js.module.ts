import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JsPageRoutingModule } from './js-routing.module';

import { JsPage } from './js.page';
import { SharedModule } from 'src/component/shared-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JsPageRoutingModule,
    SharedModule
  ],
  declarations: [JsPage]
})
export class JsPageModule {}
