import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhpintroPageRoutingModule } from './phpintro-routing.module';

import { PhpintroPage } from './phpintro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhpintroPageRoutingModule
  ],
  declarations: [PhpintroPage]
})
export class PhpintroPageModule {}
