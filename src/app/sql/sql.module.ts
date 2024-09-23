import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SqlPageRoutingModule } from './sql-routing.module';

import { SqlPage } from './sql.page';
import { SharedModule } from 'src/component/shared-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SqlPageRoutingModule,
    SharedModule
  ],
  declarations: [SqlPage]
})
export class SqlPageModule {}
