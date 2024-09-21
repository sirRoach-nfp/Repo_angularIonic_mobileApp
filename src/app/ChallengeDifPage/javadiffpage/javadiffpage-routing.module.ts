import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JavadiffpagePage } from './javadiffpage.page';

const routes: Routes = [
  {
    path: '',
    component: JavadiffpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JavadiffpagePageRoutingModule {}
