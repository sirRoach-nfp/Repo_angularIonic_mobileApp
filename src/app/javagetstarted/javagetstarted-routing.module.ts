import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JavagetstartedPage } from './javagetstarted.page';

const routes: Routes = [
  {
    path: '',
    component: JavagetstartedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JavagetstartedPageRoutingModule {}
