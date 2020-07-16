import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockModalOnePage } from './stock-modal-one.page';

const routes: Routes = [
  {
    path: '',
    component: StockModalOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockModalOnePageRoutingModule {}
