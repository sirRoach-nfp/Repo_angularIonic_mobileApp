import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CssAttributesPage } from './css-attributes.page';

const routes: Routes = [
  {
    path: '',
    component: CssAttributesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CssAttributesPageRoutingModule {}
