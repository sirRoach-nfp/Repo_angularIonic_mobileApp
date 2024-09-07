import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CSSdiffpagePageRoutingModule } from './cssdiffpage-routing.module';

import { CSSdiffpagePage } from './cssdiffpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CSSdiffpagePageRoutingModule
  ],
  declarations: [CSSdiffpagePage]
})
export class CSSdiffpagePageModule {}
