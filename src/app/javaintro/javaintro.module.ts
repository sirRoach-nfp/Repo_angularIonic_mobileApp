import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JavaintroPageRoutingModule } from './javaintro-routing.module';

import { JavaintroPage } from './javaintro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JavaintroPageRoutingModule
  ],
  declarations: [JavaintroPage]
})
export class JavaintroPageModule {}
