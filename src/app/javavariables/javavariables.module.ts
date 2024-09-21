import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JavavariablesPageRoutingModule } from './javavariables-routing.module';

import { JavavariablesPage } from './javavariables.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JavavariablesPageRoutingModule
  ],
  declarations: [JavavariablesPage]
})
export class JavavariablesPageModule {}
