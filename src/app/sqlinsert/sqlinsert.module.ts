import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SqlinsertPageRoutingModule } from './sqlinsert-routing.module';

import { SqlinsertPage } from './sqlinsert.page';
import { SharedModule } from 'src/component/shared-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SqlinsertPageRoutingModule,
    SharedModule
  ],
  declarations: [SqlinsertPage]
})
export class SqlinsertPageModule {}
