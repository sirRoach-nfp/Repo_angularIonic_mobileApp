import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PygetstartedPageRoutingModule } from './pygetstarted-routing.module';

import { PygetstartedPage } from './pygetstarted.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PygetstartedPageRoutingModule
  ],
  declarations: [PygetstartedPage]
})
export class PygetstartedPageModule {}
