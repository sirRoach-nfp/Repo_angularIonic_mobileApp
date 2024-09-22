import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchResultPagePage } from './search-result-page.page';

const routes: Routes = [
  {
    path: '',
    component: SearchResultPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchResultPagePageRoutingModule {}
