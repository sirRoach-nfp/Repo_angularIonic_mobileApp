import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhpsyntaxPageRoutingModule } from './phpsyntax-routing.module';

import { PhpsyntaxPage } from './phpsyntax.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhpsyntaxPageRoutingModule
  ],
  declarations: [PhpsyntaxPage]
})
export class PhpsyntaxPageModule {}
