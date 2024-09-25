import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PythondiffpagePageRoutingModule } from './pythondiffpage-routing.module';

import { PythondiffpagePage } from './pythondiffpage.page';
import { SharedModule } from 'src/component/shared-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PythondiffpagePageRoutingModule,
    SharedModule
  ],
  declarations: [PythondiffpagePage]
})
export class PythondiffpagePageModule {}
