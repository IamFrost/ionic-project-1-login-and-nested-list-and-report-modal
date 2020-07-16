import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { StockModalOnePage } from '../stock-modal-one/stock-modal-one.page';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  constructor(private dataService: DataService, private router: Router, public modalController: ModalController) {
     this.GetAllProducts(); // uncomment this when ok
    // this.getDistinctCategoryValues();

  }

  currentList: string[] = [];

  products = [];

  selectedType = '';

  clickFlag = 0;

  public disabled = false;

  setIonList(data): void {
    if (this.clickFlag === 0) {
      this.currentList = this.getDistinctCategoryValues();
      this.clickFlag = 1;
    } else if (this.clickFlag === 1) {
      this.setCurrentCategory(data);
      this.currentList = this.getDistinctTypeValues(this.dataService.selectedCategory);
      this.clickFlag = 2;
    } else if (this.clickFlag === 2) {
      this.selectedType = data;
      this.setCurrentType(data);
      // this.currentList = this.getDistinctProductValues(this.dataService.selectedCategory, this.dataService.selectedType);
      this.presentModal();
      console.log('here is name list : ' + this.currentList);
    }
    else {
      this.currentList = this.getDistinctCategoryValues();
    }
  }

  onBackButtonPressed() {
    // this.change();
    if (this.clickFlag === 0) {

    } else if (this.clickFlag === 1 || this.clickFlag === 2) {
      this.selectedType = '';
      this.currentList = this.getDistinctCategoryValues();
      this.clickFlag = 0;
    }
    else {
      this.currentList = this.getDistinctCategoryValues();
    }
  }

  ngOnInit() {

  }

  async GetAllProducts() {
    const response = await this.dataService.GetProducts();
    console.log(response);

    const dataService = await response.json();
    this.products = dataService;

    this.setResponse(dataService);
    console.log(this.products);

    this.currentList = this.getDistinctCategoryValues();

    // this.getDistinctTypeValues('APPLE');
    // this.getDistinctProductValues('MAC ACCESSORIES', 'MOUSE');
  }

  setResponse(response) {
    this.dataService.response = response;
  }

  setCurrentCategory(category) {
    this.dataService.selectedCategory = category;
    // this.setCurrentType(category);
  }

  setCurrentType(type) {
    this.dataService.selectedType = type;
    // this.setCurrentName();
  }

  setCurrentName(name) {
    this.dataService.selectedName = name;
  }

  getDistinctCategoryValues() {

    const lookup = {};
    // const items = jsonResponse;
    const result = [];

    // this.GetAllProducts();
    // console.log(this.dataService.response);
    for (const item of this.dataService.response) {
      const currentVar = item.category;

      if (!(currentVar in lookup)) {
        lookup[currentVar] = 1;
        result.push(currentVar);
      }
    }

    console.log(result);
    return result;

  }

  getDistinctTypeValues(selectedCategory) {

    const lookup = {};
    // const items = jsonResponse;
    const result = [];

    // this.GetAllProducts();
    console.log(this.dataService.response);
    for (const item of this.dataService.response) {
      if (item.category === selectedCategory) {
        const currentVar = item.type;

        if (!(currentVar in lookup)) {
          lookup[currentVar] = 1;
          result.push(currentVar);
        }
      }
    }

    console.log(result);
    return result;

  }

  getDistinctProductValues(selectedCategory, selectedType) {

    const lookup = {};
    // const items = jsonResponse;
    const result = [];

    // this.GetAllProducts();
    console.log(this.dataService.response);
    for (const item of this.dataService.response) {
      if (item.category === selectedCategory && item.type === selectedType) {
        const currentVar = item.name;

        if (!(currentVar in lookup)) {
          lookup[currentVar] = 1;
          result.push(currentVar);
        }
      }
    }

    console.log(result);
    return result;

  }

  getDistinctSlNameRoomStockValues(selectedCategory, selectedType) {

    const sl = 1;
    const lookup = {};
    // const items = jsonResponse;
    const result = [];

    // this.GetAllProducts();
    console.log(this.dataService.response);
    for (const item of this.dataService.response) {
      if (item.category === selectedCategory && item.type === selectedType) {
        const currentVar = item.name;

        if (!(currentVar in lookup)) {
          lookup[currentVar] = 1;
          result.push(currentVar);
        }
      }
    }

    console.log(result);
    return result;

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: StockModalOnePage,
      cssClass: 'my-custom-class',
      // componentProps: {
      //   selectedNames: this.getNameValues(),
      //   selectedType: this.dataService.selectedType,
      // }
    });
    return await modal.present();
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

  // public action() {
  //   console.log('action triggered');
  // }

  // public change() {

  //   if (this.clickFlag === 0 || this.clickFlag === 1) {
  //     this.disabled = true;
  //   }
  // }



}
