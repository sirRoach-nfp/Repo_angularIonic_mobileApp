import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CssIntroPageRoutingModule } from './css-intro-routing.module';

import { CssIntroPage } from './css-intro.page';
import { SharedModule } from 'src/component/shared-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CssIntroPageRoutingModule,
    SharedModule
  ],
  declarations: [CssIntroPage]
})
export class CssIntroPageModule {}
