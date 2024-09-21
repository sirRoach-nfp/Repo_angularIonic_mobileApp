import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JavagetstartedPageRoutingModule } from './javagetstarted-routing.module';

import { JavagetstartedPage } from './javagetstarted.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JavagetstartedPageRoutingModule
  ],
  declarations: [JavagetstartedPage]
})
export class JavagetstartedPageModule {}
