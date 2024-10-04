import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CppsyntaxPage } from './cppsyntax.page';

const routes: Routes = [
  {
    path: '',
    component: CppsyntaxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CppsyntaxPageRoutingModule {}
