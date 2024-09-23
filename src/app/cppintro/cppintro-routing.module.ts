import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CppintroPage } from './cppintro.page';

const routes: Routes = [
  {
    path: '',
    component: CppintroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CppintroPageRoutingModule {}
