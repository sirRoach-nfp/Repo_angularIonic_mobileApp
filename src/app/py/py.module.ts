import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyPageRoutingModule } from './py-routing.module';

import { PyPage } from './py.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyPageRoutingModule
  ],
  declarations: [PyPage]
})
export class PyPageModule {}
