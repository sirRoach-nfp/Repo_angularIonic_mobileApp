import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CssAttributesPageRoutingModule } from './css-attributes-routing.module';

import { CssAttributesPage } from './css-attributes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CssAttributesPageRoutingModule
  ],
  declarations: [CssAttributesPage]
})
export class CssAttributesPageModule {}
