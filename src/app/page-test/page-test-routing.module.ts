import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageTestPage } from './page-test.page';
import { SharedModule } from 'src/component/shared-modules';
const routes: Routes = [
  {
    path: '',
    component: PageTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),SharedModule],
  exports: [RouterModule],
})
export class PageTestPageRoutingModule {}
