import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SqlselectPageRoutingModule } from './sqlselect-routing.module';

import { SqlselectPage } from './sqlselect.page';
import { SharedModule } from 'src/component/shared-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SqlselectPageRoutingModule,
    SharedModule
  ],
  declarations: [SqlselectPage]
})
export class SqlselectPageModule {}
