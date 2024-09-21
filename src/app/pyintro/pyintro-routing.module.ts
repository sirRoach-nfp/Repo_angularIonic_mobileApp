import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PyintroPage } from './pyintro.page';

const routes: Routes = [
  {
    path: '',
    component: PyintroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PyintroPageRoutingModule {}
