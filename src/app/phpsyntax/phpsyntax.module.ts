import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhpsyntaxPageRoutingModule } from './phpsyntax-routing.module';

import { PhpsyntaxPage } from './phpsyntax.page';
import { SharedModule } from 'src/component/shared-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhpsyntaxPageRoutingModule,
    SharedModule
  ],
  declarations: [PhpsyntaxPage]
})
export class PhpsyntaxPageModule {}
