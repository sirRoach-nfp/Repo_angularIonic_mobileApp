import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SqldiffpagePageRoutingModule } from './sqldiffpage-routing.module';

import { SqldiffpagePage } from './sqldiffpage.page';
import { SharedModule } from 'src/component/shared-modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SqldiffpagePageRoutingModule,
    SharedModule
  ],
  declarations: [SqldiffpagePage]
})
export class SqldiffpagePageModule {}
