import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhpvariablesPageRoutingModule } from './phpvariables-routing.module';

import { PhpvariablesPage } from './phpvariables.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhpvariablesPageRoutingModule
  ],
  declarations: [PhpvariablesPage]
})
export class PhpvariablesPageModule {}
