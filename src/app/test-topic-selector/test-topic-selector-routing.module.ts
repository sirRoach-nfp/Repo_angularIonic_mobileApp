import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { TestTopicSelectorPage } from './test-topic-selector.page';

const routes: Routes = [
  {
    path: '',
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestTopicSelectorPageRoutingModule {}
