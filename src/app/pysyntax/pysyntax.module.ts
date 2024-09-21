import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PysyntaxPageRoutingModule } from './pysyntax-routing.module';

import { PysyntaxPage } from './pysyntax.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PysyntaxPageRoutingModule
  ],
  declarations: [PysyntaxPage]
})
export class PysyntaxPageModule {}
