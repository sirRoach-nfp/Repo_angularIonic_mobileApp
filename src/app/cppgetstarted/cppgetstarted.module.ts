import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CppgetstartedPageRoutingModule } from './cppgetstarted-routing.module';

import { CppgetstartedPage } from './cppgetstarted.page';
import { SharedModule } from 'src/component/shared-modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CppgetstartedPageRoutingModule,
    SharedModule
  ],
  declarations: [CppgetstartedPage]
})
export class CppgetstartedPageModule {}
