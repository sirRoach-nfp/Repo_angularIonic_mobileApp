import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CSSdiffpagePageRoutingModule } from './cssdiffpage-routing.module';
import { SharedModule } from 'src/component/shared-modules';
import { CSSdiffpagePage } from './cssdiffpage.page';
import { SelectionModalComponent } from 'src/component/selection-modal/selection-modal.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CSSdiffpagePageRoutingModule,
    SharedModule
  ],
  declarations: [CSSdiffpagePage]
})
export class CSSdiffpagePageModule {}
