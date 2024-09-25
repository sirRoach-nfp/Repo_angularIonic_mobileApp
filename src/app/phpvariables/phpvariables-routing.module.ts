import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhpvariablesPage } from './phpvariables.page';

const routes: Routes = [
  {
    path: '',
    component: PhpvariablesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhpvariablesPageRoutingModule {}
