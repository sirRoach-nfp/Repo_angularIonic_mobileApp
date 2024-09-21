import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HtmlbasicPageRoutingModule } from './htmlbasic-routing.module';

import { HtmlbasicPage } from './htmlbasic.page';
import { SharedModule } from 'src/component/shared-modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HtmlbasicPageRoutingModule,
    SharedModule
  ],
  declarations: [HtmlbasicPage]
})
export class HtmlbasicPageModule {}
