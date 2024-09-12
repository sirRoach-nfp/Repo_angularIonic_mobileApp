import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CssElementPage } from './css-element.page';

const routes: Routes = [
  {
    path: '',
    component: CssElementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CssElementPageRoutingModule {}
