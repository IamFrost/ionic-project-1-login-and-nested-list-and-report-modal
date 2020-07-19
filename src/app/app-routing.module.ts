import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'select-branch-fyear',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./product-list/product-list.module').then( m => m.ProductListPageModule)
  },
  {
    path: 'stock-modal-one',
    loadChildren: () => import('./stock-modal-one/stock-modal-one.module').then( m => m.StockModalOnePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'reset-password-one',
    loadChildren: () => import('./reset-password-one/reset-password-one.module').then( m => m.ResetPasswordOnePageModule)
  },
  {
    path: 'select-branch-fyear',
    loadChildren: () => import('./select-branch-fyear/select-branch-fyear.module').then( m => m.SelectBranchFyearPageModule)
  },
  {
    path: 'login-modal-one',
    loadChildren: () => import('./login-modal-one/login-modal-one.module').then( m => m.LoginModalOnePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
