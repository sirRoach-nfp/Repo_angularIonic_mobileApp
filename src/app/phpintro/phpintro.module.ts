import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhpintroPageRoutingModule } from './phpintro-routing.module';

import { PhpintroPage } from './phpintro.page';
import { SharedModule } from 'src/component/shared-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhpintroPageRoutingModule,
    SharedModule
  ],
  declarations: [PhpintroPage]
})
export class PhpintroPageModule {}
