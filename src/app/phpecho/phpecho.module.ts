import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhpechoPageRoutingModule } from './phpecho-routing.module';

import { PhpechoPage } from './phpecho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhpechoPageRoutingModule
  ],
  declarations: [PhpechoPage]
})
export class PhpechoPageModule {}
