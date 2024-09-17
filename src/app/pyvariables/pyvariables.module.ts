import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyvariablesPageRoutingModule } from './pyvariables-routing.module';

import { PyvariablesPage } from './pyvariables.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyvariablesPageRoutingModule
  ],
  declarations: [PyvariablesPage]
})
export class PyvariablesPageModule {}
