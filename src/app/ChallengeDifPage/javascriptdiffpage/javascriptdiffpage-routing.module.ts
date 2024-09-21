import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JavascriptdiffpagePage } from './javascriptdiffpage.page';

const routes: Routes = [
  {
    path: '',
    component: JavascriptdiffpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JavascriptdiffpagePageRoutingModule {}
