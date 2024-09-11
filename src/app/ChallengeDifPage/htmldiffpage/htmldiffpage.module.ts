import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HTMLdiffpagePageRoutingModule } from './htmldiffpage-routing.module';
import { SharedModule } from 'src/component/shared-modules';
import { HTMLdiffpagePage } from './htmldiffpage.page';
import { SelectionModalComponent } from 'src/component/selection-modal/selection-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HTMLdiffpagePageRoutingModule,
    SharedModule
    
  ],
  declarations: [HTMLdiffpagePage],
 
})
export class HTMLdiffpagePageModule {}
