import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageTestPageRoutingModule } from './page-test-routing.module';

import { PageTestPage } from './page-test.page';
import { SharedModule } from 'src/component/shared-modules';
import { LessonRendererComponent } from 'src/component/lesson-renderer/lesson-renderer.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageTestPageRoutingModule,
    SharedModule
    
  ],
  declarations: [PageTestPage]
})
export class PageTestPageModule {}
