import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PysyntaxPageRoutingModule } from './pysyntax-routing.module';

import { PysyntaxPage } from './pysyntax.page';
import { SharedModule } from 'src/component/shared-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PysyntaxPageRoutingModule,
    SharedModule
  ],
  declarations: [PysyntaxPage]
})
export class PysyntaxPageModule {}
