import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PythondiffpagePage } from './pythondiffpage.page';

const routes: Routes = [
  {
    path: '',
    component: PythondiffpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PythondiffpagePageRoutingModule {}
