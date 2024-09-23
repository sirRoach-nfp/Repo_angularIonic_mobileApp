import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyPageRoutingModule } from './py-routing.module';

import { PyPage } from './py.page';
import { SharedModule } from 'src/component/shared-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyPageRoutingModule,
    SharedModule
  ],
  declarations: [PyPage]
})
export class PyPageModule {}
