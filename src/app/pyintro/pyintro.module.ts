import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyintroPageRoutingModule } from './pyintro-routing.module';

import { PyintroPage } from './pyintro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyintroPageRoutingModule
  ],
  declarations: [PyintroPage]
})
export class PyintroPageModule {}
