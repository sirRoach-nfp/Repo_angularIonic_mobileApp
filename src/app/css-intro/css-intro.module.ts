import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CssIntroPageRoutingModule } from './css-intro-routing.module';

import { CssIntroPage } from './css-intro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CssIntroPageRoutingModule
  ],
  declarations: [CssIntroPage]
})
export class CssIntroPageModule {}
