import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PythondiffpagePageRoutingModule } from './pythondiffpage-routing.module';

import { PythondiffpagePage } from './pythondiffpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PythondiffpagePageRoutingModule
  ],
  declarations: [PythondiffpagePage]
})
export class PythondiffpagePageModule {}
