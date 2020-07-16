import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockModalOnePageRoutingModule } from './stock-modal-one-routing.module';

import { StockModalOnePage } from './stock-modal-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockModalOnePageRoutingModule
  ],
  declarations: [StockModalOnePage]
})
export class StockModalOnePageModule {}
