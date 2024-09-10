import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HtmlattriPageRoutingModule } from './htmlattri-routing.module';

import { HtmlattriPage } from './htmlattri.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HtmlattriPageRoutingModule
  ],
  declarations: [HtmlattriPage]
})
export class HtmlattriPageModule {}
