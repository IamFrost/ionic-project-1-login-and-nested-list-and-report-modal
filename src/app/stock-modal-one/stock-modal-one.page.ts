import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-stock-modal-one',
  templateUrl: './stock-modal-one.page.html',
  styleUrls: ['./stock-modal-one.page.scss'],
})
export class StockModalOnePage implements OnInit {

  slNo = 0;
  // @Input() selectedNames: string[];
  // @Input() selectedType: string;
  selectedNames = [];
  selectedType = '';

  constructor(private dataService: DataService, private modalController: ModalController) {
    this.selectedType = this.dataService.selectedType;
    this.selectedNames = this.getNameValues();
  }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true
    });
  }

  getNameValues() {

    const lookup = {};
    // const items = jsonResponse;
    const result = [];

    // this.GetAllProducts();
    console.log(this.dataService.response);
    for (const item of this.dataService.response) {
      if (item.category === this.dataService.selectedCategory && item.type === this.dataService.selectedType) {
        const currentVar = item;
        result.push(currentVar);
      }
    }

    console.log('modal data: ' + result);

    return result;

  }





}
