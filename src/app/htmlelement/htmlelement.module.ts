import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HtmlelementPageRoutingModule } from './htmlelement-routing.module';

import { HtmlelementPage } from './htmlelement.page';
import { SharedModule } from 'src/component/shared-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HtmlelementPageRoutingModule,
    SharedModule
  ],
  declarations: [HtmlelementPage]
})
export class HtmlelementPageModule {}
