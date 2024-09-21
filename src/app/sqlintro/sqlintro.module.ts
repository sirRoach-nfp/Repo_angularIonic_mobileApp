import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SqlintroPageRoutingModule } from './sqlintro-routing.module';

import { SqlintroPage } from './sqlintro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SqlintroPageRoutingModule
  ],
  declarations: [SqlintroPage]
})
export class SqlintroPageModule {}
