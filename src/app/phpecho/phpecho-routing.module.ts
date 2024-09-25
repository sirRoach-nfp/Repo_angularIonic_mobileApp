import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhpechoPage } from './phpecho.page';

const routes: Routes = [
  {
    path: '',
    component: PhpechoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhpechoPageRoutingModule {}
