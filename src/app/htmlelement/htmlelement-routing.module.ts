import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HtmlelementPage } from './htmlelement.page';

const routes: Routes = [
  {
    path: '',
    component: HtmlelementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HtmlelementPageRoutingModule {}
