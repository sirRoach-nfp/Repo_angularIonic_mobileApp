import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CSSdiffpagePage } from './cssdiffpage.page';

const routes: Routes = [
  {
    path: '',
    component: CSSdiffpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CSSdiffpagePageRoutingModule {}
