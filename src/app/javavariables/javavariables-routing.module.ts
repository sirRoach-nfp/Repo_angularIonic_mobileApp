import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JavavariablesPage } from './javavariables.page';

const routes: Routes = [
  {
    path: '',
    component: JavavariablesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JavavariablesPageRoutingModule {}
