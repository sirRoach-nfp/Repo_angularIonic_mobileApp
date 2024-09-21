import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PythondifpagePage } from './pythondifpage.page';

const routes: Routes = [
  {
    path: '',
    component: PythondifpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PythondifpagePageRoutingModule {}
