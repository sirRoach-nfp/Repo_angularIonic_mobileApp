import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CppdiffpagePage } from './cppdiffpage.page';

const routes: Routes = [
  {
    path: '',
    component: CppdiffpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CppdiffpagePageRoutingModule {}
