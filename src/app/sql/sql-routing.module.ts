import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SqlPage } from './sql.page';

const routes: Routes = [
  {
    path: '',
    component: SqlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SqlPageRoutingModule {}
