import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchResultPagePageRoutingModule } from './search-result-page-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from 'src/component/shared-modules';
import { SearchResultPagePage } from './search-result-page.page';

@NgModule({
  imports: [

    CommonModule,
    FormsModule,
    IonicModule,
    SearchResultPagePageRoutingModule,
    SharedModule,
    MatProgressSpinnerModule
  ],
  declarations: [SearchResultPagePage]
})
export class SearchResultPagePageModule {}
