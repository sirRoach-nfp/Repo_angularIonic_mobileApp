import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExerciseSelectorPageRoutingModule } from './exercise-selector-routing.module';

import { ExerciseSelectorPage } from './exercise-selector.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExerciseSelectorPageRoutingModule
  ],
  declarations: [ExerciseSelectorPage]
})
export class ExerciseSelectorPageModule {}
