import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CppvariablesPageRoutingModule } from './cppvariables-routing.module';

import { CppvariablesPage } from './cppvariables.page';
import { SharedModule } from 'src/component/shared-modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CppvariablesPageRoutingModule,
    SharedModule
  ],
  declarations: [CppvariablesPage]
})
export class CppvariablesPageModule {}
