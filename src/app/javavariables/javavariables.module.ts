import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JavavariablesPageRoutingModule } from './javavariables-routing.module';

import { JavavariablesPage } from './javavariables.page';
import { SharedModule } from 'src/component/shared-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JavavariablesPageRoutingModule,
    SharedModule
  ],
  declarations: [JavavariablesPage]
})
export class JavavariablesPageModule {}
