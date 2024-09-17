import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PygetstartedPage } from './pygetstarted.page';

const routes: Routes = [
  {
    path: '',
    component: PygetstartedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PygetstartedPageRoutingModule {}
