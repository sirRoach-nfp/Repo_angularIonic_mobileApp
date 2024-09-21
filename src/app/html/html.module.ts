import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HtmlPageRoutingModule } from './html-routing.module';

import { HtmlPage } from './html.page';
import { SharedModule } from 'src/component/shared-modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HtmlPageRoutingModule,
    SharedModule
  ],
  declarations: [HtmlPage]
})
export class HtmlPageModule {}
