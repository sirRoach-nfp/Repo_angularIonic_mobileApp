import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JavasyntaxPageRoutingModule } from './javasyntax-routing.module';

import { JavasyntaxPage } from './javasyntax.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JavasyntaxPageRoutingModule
  ],
  declarations: [JavasyntaxPage]
})
export class JavasyntaxPageModule {}
