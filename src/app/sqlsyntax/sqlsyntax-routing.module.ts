import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SqlsyntaxPage } from './sqlsyntax.page';

const routes: Routes = [
  {
    path: '',
    component: SqlsyntaxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SqlsyntaxPageRoutingModule {}
