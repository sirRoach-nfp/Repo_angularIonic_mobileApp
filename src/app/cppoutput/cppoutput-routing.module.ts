import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CppoutputPage } from './cppoutput.page';

const routes: Routes = [
  {
    path: '',
    component: CppoutputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CppoutputPageRoutingModule {}
