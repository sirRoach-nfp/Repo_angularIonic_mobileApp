import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestTopicSelectorPageRoutingModule } from './test-topic-selector-routing.module';

//import { TestTopicSelectorPage } from './test-topic-selector.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestTopicSelectorPageRoutingModule
  ],
  declarations: []
})
export class TestTopicSelectorPageModule {}
