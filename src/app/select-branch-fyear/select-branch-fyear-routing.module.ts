import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectBranchFyearPage } from './select-branch-fyear.page';

const routes: Routes = [
  {
    path: '',
    component: SelectBranchFyearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectBranchFyearPageRoutingModule {}
