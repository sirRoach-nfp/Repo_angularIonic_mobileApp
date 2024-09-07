import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HTMLdiffpagePageRoutingModule } from './htmldiffpage-routing.module';

import { HTMLdiffpagePage } from './htmldiffpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HTMLdiffpagePageRoutingModule
  ],
  declarations: [HTMLdiffpagePage]
})
export class HTMLdiffpagePageModule {}
