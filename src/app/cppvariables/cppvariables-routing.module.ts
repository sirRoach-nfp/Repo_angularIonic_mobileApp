import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CppvariablesPage } from './cppvariables.page';

const routes: Routes = [
  {
    path: '',
    component: CppvariablesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CppvariablesPageRoutingModule {}
