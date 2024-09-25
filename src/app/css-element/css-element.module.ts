import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CssElementPageRoutingModule } from './css-element-routing.module';

import { CssElementPage } from './css-element.page';
import { SharedModule } from 'src/component/shared-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CssElementPageRoutingModule,
    SharedModule
  ],
  declarations: [CssElementPage]
})
export class CssElementPageModule {}
