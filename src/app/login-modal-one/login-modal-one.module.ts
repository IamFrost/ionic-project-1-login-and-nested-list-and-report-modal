import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginModalOnePageRoutingModule } from './login-modal-one-routing.module';

import { LoginModalOnePage } from './login-modal-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginModalOnePageRoutingModule
  ],
  declarations: [LoginModalOnePage]
})
export class LoginModalOnePageModule {}
