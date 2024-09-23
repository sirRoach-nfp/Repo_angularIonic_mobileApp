import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SqlsyntaxPageRoutingModule } from './sqlsyntax-routing.module';

import { SqlsyntaxPage } from './sqlsyntax.page';
import { SharedModule } from 'src/component/shared-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SqlsyntaxPageRoutingModule,
    SharedModule
  ],
  declarations: [SqlsyntaxPage]
})
export class SqlsyntaxPageModule {}
