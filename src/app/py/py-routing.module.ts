import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PyPage } from './py.page';

const routes: Routes = [
  {
    path: '',
    component: PyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PyPageRoutingModule {}
