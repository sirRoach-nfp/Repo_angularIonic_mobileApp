import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CppPageRoutingModule } from './cpp-routing.module';

import { CppPage } from './cpp.page';
import { SharedModule } from 'src/component/shared-modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CppPageRoutingModule,
    SharedModule
  ],
  declarations: [CppPage]
})
export class CppPageModule {}
