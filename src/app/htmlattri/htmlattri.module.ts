import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HtmlattriPageRoutingModule } from './htmlattri-routing.module';

import { HtmlattriPage } from './htmlattri.page';
import { SharedModule } from 'src/component/shared-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HtmlattriPageRoutingModule,
    SharedModule
  ],
  declarations: [HtmlattriPage]
})
export class HtmlattriPageModule {}
