import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PysyntaxPage } from './pysyntax.page';

const routes: Routes = [
  {
    path: '',
    component: PysyntaxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PysyntaxPageRoutingModule {}
