import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhpintroPage } from './phpintro.page';

const routes: Routes = [
  {
    path: '',
    component: PhpintroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhpintroPageRoutingModule {}
