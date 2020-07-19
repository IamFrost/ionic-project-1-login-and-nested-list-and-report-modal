import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginModalOnePage } from './login-modal-one.page';

const routes: Routes = [
  {
    path: '',
    component: LoginModalOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginModalOnePageRoutingModule {}
