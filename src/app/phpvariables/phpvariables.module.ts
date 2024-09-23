import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhpvariablesPageRoutingModule } from './phpvariables-routing.module';

import { PhpvariablesPage } from './phpvariables.page';
import { SharedModule } from 'src/component/shared-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhpvariablesPageRoutingModule,
    SharedModule
  ],
  declarations: [PhpvariablesPage]
})
export class PhpvariablesPageModule {}
