import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signup',
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
  },
  {
    path: 'test1',
    loadChildren: () => import('./test1/test1.module').then( m => m.Test1PageModule)
  },
  {
    path: 'test2',
    loadChildren: () => import('./test2/test2.module').then( m => m.Test2PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
