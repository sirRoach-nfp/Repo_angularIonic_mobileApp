import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SqlinsertPageRoutingModule } from './sqlinsert-routing.module';

import { SqlinsertPage } from './sqlinsert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SqlinsertPageRoutingModule
  ],
  declarations: [SqlinsertPage]
})
export class SqlinsertPageModule {}
