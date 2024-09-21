import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SqlsyntaxPageRoutingModule } from './sqlsyntax-routing.module';

import { SqlsyntaxPage } from './sqlsyntax.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SqlsyntaxPageRoutingModule
  ],
  declarations: [SqlsyntaxPage]
})
export class SqlsyntaxPageModule {}
