import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhpdiffpagePageRoutingModule } from './phpdiffpage-routing.module';

import { PhpdiffpagePage } from './phpdiffpage.page';

import { SharedModule } from 'src/component/shared-modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhpdiffpagePageRoutingModule,
    SharedModule
  ],
  declarations: [PhpdiffpagePage]
})
export class PhpdiffpagePageModule {}
