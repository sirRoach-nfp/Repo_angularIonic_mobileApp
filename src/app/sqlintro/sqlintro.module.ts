import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SqlintroPageRoutingModule } from './sqlintro-routing.module';

import { SqlintroPage } from './sqlintro.page';
import { SharedModule } from 'src/component/shared-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SqlintroPageRoutingModule,
    SharedModule
  ],
  declarations: [SqlintroPage]
})
export class SqlintroPageModule {}
