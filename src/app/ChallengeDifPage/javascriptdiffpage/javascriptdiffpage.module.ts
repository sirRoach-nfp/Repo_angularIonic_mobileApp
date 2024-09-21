import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JavascriptdiffpagePageRoutingModule } from './javascriptdiffpage-routing.module';

import { JavascriptdiffpagePage } from './javascriptdiffpage.page';
import { SharedModule } from 'src/component/shared-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JavascriptdiffpagePageRoutingModule,
    SharedModule
  ],
  declarations: [JavascriptdiffpagePage]
})
export class JavascriptdiffpagePageModule {}
