import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhpPageRoutingModule } from './php-routing.module';

import { PhpPage } from './php.page';
import { SharedModule } from 'src/component/shared-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhpPageRoutingModule,
    SharedModule
  ],
  declarations: [PhpPage]
})
export class PhpPageModule {}
