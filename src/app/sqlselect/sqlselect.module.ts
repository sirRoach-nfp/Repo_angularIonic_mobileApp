import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SqlselectPageRoutingModule } from './sqlselect-routing.module';

import { SqlselectPage } from './sqlselect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SqlselectPageRoutingModule
  ],
  declarations: [SqlselectPage]
})
export class SqlselectPageModule {}
