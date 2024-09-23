import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CppintroPageRoutingModule } from './cppintro-routing.module';

import { CppintroPage } from './cppintro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CppintroPageRoutingModule
  ],
  declarations: [CppintroPage]
})
export class CppintroPageModule {}
