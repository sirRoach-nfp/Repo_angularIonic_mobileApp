import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JavadiffpagePageRoutingModule } from './javadiffpage-routing.module';

import { JavadiffpagePage } from './javadiffpage.page';
import { SharedModule } from 'src/component/shared-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JavadiffpagePageRoutingModule,
    SharedModule
  ],
  declarations: [JavadiffpagePage]
})
export class JavadiffpagePageModule {}
