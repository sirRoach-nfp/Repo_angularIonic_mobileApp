import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JsStatementsPage } from './js-statements.page';

const routes: Routes = [
  {
    path: '',
    component: JsStatementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsStatementsPageRoutingModule {}
