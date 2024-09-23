import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CppgetstartedPageRoutingModule } from './cppgetstarted-routing.module';

import { CppgetstartedPage } from './cppgetstarted.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CppgetstartedPageRoutingModule
  ],
  declarations: [CppgetstartedPage]
})
export class CppgetstartedPageModule {}
