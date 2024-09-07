import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HTMLdiffpagePage } from './htmldiffpage.page';

const routes: Routes = [
  {
    path: '',
    component: HTMLdiffpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HTMLdiffpagePageRoutingModule {}
