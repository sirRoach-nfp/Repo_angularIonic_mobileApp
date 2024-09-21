import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JsWheretoPage } from './js-whereto.page';

const routes: Routes = [
  {
    path: '',
    component: JsWheretoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsWheretoPageRoutingModule {}
