import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SqlinsertPage } from './sqlinsert.page';

const routes: Routes = [
  {
    path: '',
    component: SqlinsertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SqlinsertPageRoutingModule {}
