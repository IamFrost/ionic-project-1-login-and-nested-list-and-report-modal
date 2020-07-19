import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectBranchFyearPageRoutingModule } from './select-branch-fyear-routing.module';

import { SelectBranchFyearPage } from './select-branch-fyear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectBranchFyearPageRoutingModule
  ],
  declarations: [SelectBranchFyearPage]
})
export class SelectBranchFyearPageModule {}
