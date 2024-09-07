import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageTestPage } from './page-test.page';

const routes: Routes = [
  {
    path: '',
    component: PageTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageTestPageRoutingModule {}
