import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JavagetstartedPageRoutingModule } from './javagetstarted-routing.module';

import { JavagetstartedPage } from './javagetstarted.page';
import { SharedModule } from 'src/component/shared-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JavagetstartedPageRoutingModule,
    SharedModule
  ],
  declarations: [JavagetstartedPage]
})
export class JavagetstartedPageModule {}
