import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JsIntroPage } from './js-intro.page';

const routes: Routes = [
  {
    path: '',
    component: JsIntroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsIntroPageRoutingModule {}
