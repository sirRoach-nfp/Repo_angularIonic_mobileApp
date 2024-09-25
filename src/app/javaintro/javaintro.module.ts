import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JavaintroPageRoutingModule } from './javaintro-routing.module';

import { JavaintroPage } from './javaintro.page';
import { SharedModule } from 'src/component/shared-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JavaintroPageRoutingModule,
    SharedModule
  ],
  declarations: [JavaintroPage]
})
export class JavaintroPageModule {}
