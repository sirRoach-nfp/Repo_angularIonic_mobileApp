import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CssPageRoutingModule } from './css-routing.module';

import { CssPage } from './css.page';
import { SharedModule } from 'src/component/shared-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CssPageRoutingModule,
    SharedModule
  ],
  declarations: [CssPage]
})
export class CssPageModule {}
