import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CssBasicPageRoutingModule } from './css-basic-routing.module';

import { CssBasicPage } from './css-basic.page';
import { SharedModule } from 'src/component/shared-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CssBasicPageRoutingModule,
    SharedModule
  ],
  declarations: [CssBasicPage]
})
export class CssBasicPageModule {}
