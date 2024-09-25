import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyvariablesPageRoutingModule } from './pyvariables-routing.module';

import { PyvariablesPage } from './pyvariables.page';
import { SharedModule } from 'src/component/shared-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyvariablesPageRoutingModule,
    SharedModule
  ],
  declarations: [PyvariablesPage]
})
export class PyvariablesPageModule {}
