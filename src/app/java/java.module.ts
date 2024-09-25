import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JavaPageRoutingModule } from './java-routing.module';

import { JavaPage } from './java.page';
import { SharedModule } from 'src/component/shared-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JavaPageRoutingModule,
    SharedModule
  ],
  declarations: [JavaPage]
})
export class JavaPageModule {}
