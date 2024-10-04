import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CppsyntaxPageRoutingModule } from './cppsyntax-routing.module';

import { CppsyntaxPage } from './cppsyntax.page';
import { SharedModule } from 'src/component/shared-modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CppsyntaxPageRoutingModule,
    SharedModule
  ],
  declarations: [CppsyntaxPage]
})
export class CppsyntaxPageModule {}
