import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CssBasicPage } from './css-basic.page';

const routes: Routes = [
  {
    path: '',
    component: CssBasicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CssBasicPageRoutingModule {}
