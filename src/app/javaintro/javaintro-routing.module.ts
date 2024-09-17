import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JavaintroPage } from './javaintro.page';

const routes: Routes = [
  {
    path: '',
    component: JavaintroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JavaintroPageRoutingModule {}
