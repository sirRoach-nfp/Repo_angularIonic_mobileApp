import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CppintroPageRoutingModule } from './cppintro-routing.module';

import { CppintroPage } from './cppintro.page';
import { SharedModule } from 'src/component/shared-modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CppintroPageRoutingModule,
    SharedModule
  ],
  declarations: [CppintroPage]
})
export class CppintroPageModule {}
