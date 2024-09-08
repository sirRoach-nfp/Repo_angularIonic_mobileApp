import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CssElementPageRoutingModule } from './css-element-routing.module';

import { CssElementPage } from './css-element.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CssElementPageRoutingModule
  ],
  declarations: [CssElementPage]
})
export class CssElementPageModule {}
