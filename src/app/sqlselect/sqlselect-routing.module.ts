import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SqlselectPage } from './sqlselect.page';

const routes: Routes = [
  {
    path: '',
    component: SqlselectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SqlselectPageRoutingModule {}
