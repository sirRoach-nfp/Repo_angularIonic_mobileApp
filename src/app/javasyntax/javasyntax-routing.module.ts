import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JavasyntaxPage } from './javasyntax.page';

const routes: Routes = [
  {
    path: '',
    component: JavasyntaxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JavasyntaxPageRoutingModule {}
