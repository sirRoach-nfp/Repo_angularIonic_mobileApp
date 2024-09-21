import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CppdiffpagePageRoutingModule } from './cppdiffpage-routing.module';

import { CppdiffpagePage } from './cppdiffpage.page';
import { SharedModule } from 'src/component/shared-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CppdiffpagePageRoutingModule,
    SharedModule
  ],
  declarations: [CppdiffpagePage]
})
export class CppdiffpagePageModule {}
