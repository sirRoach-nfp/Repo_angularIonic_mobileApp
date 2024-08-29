import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HtmlintroPage } from './htmlintro.page';

const routes: Routes = [
  {
    path: '',
    component: HtmlintroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HtmlintroPageRoutingModule {}
