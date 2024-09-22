import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchresultpagePageRoutingModule } from './searchresultpage-routing.module';

import { SearchresultpagePage } from './searchresultpage.page';
import { SharedModule } from 'src/component/shared-modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchresultpagePageRoutingModule,
    SharedModule
  ],
  declarations: [SearchresultpagePage]
})
export class SearchresultpagePageModule {}
