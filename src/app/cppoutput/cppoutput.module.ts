import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CppoutputPageRoutingModule } from './cppoutput-routing.module';

import { CppoutputPage } from './cppoutput.page';
import { SharedModule } from 'src/component/shared-modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CppoutputPageRoutingModule, 
    SharedModule
  ],
  declarations: [CppoutputPage]
})
export class CppoutputPageModule {}
