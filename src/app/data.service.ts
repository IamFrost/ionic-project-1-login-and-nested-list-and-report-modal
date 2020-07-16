import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpCLient: HttpClient) { }

  navigateFromDisplayFlag = 0;
  response = [];
  modalResponse = [];
  selectedCategory;
  selectedType;
  selectedName;

  currentProduct;

  currentLogins;
  allLogins;

  baseURLProducts = 'http://localhost:3001/products';
  baseURLProductswithSlash = 'http://localhost:3001/products' + '/';
  baseURLLogins = 'http://localhost:3000/logins';
  baseURLLoginswithSlash = 'http://localhost:3000/logins' + '/';

  currentMailToAddress;
  currentCode;

  setCurrentMailToAddress(email){

    this.currentMailToAddress = email;
  }

  getCurrentMailToAddress(){

    return this.currentMailToAddress;
  }

  setCurrentCode(code){

    this.currentCode = code;

  }

  getCurrentCode(){

    return this.currentCode;
    
  }

  setCurrentProduct(product) {
    this.currentProduct = product;
  }

  getCurrentProduct() {
    return this.currentProduct;
  }

  GetLogins() {
    return fetch((this.baseURLLogins));
  }

  GetProducts() {
    return fetch((this.baseURLProducts));
  }

  Get_A_Login_1(id: string) {
    return fetch(this.baseURLLoginswithSlash + '1' + '/' + id);
  }

  Get_A_Login_2(id: string) {
    return fetch(this.baseURLLoginswithSlash + '2' + '/' + id);
  }

  Get_A_Product(id: string) {
    return fetch(this.baseURLProductswithSlash + id);
  }

  Delete_A_Product(id: string) {
    return fetch(this.baseURLProductswithSlash + id, {
      method: 'DELETE'
    });
  }

  Create_A_Product(nameInput: string, showroomInput: string, stockInput: string,
    typeInput: string, categoryInput: string, idInput: string) {
    console.log('from data.service.ts : ' + nameInput + ' ' + showroomInput + ' '
      + stockInput + ' ' + typeInput + ' ' + categoryInput + ' ' + idInput);
    return fetch(this.baseURLProducts, {
      method: 'POST',
      body: JSON.stringify({
        name: nameInput.toString(),
        show_room: showroomInput.toString(),
        stock: stockInput.toString(),
        type: typeInput.toString(),
        category: categoryInput.toString(),
        id: idInput.toString()
      }),
      headers: { 'Content-Type': 'application/json' }
    });
  }

  Create_A_Login(username1: string, email1: string, password1: string) {
    console.log('from data.service.ts : ' + username1 + ' ' + email1 + ' ' + password1);
    return fetch(this.baseURLLogins, {
      method: 'POST',
      body: JSON.stringify({
        username: username1.toString(),
        email: email1.toString(),
        password: password1.toString()
      }),
      headers: { 'Content-Type': 'application/json' }
    });
  }


  Update_A_Product(nameInput: string, showroomInput: string, stockInput: string,
    typeInput: string, categoryInput: string, idInput: string) {
    return fetch(this.baseURLProductswithSlash + idInput, {
      method: 'PUT',
      body: JSON.stringify({
        name: nameInput.toString(),
        show_room: showroomInput.toString(),
        stock: stockInput.toString(),
        type: typeInput.toString(),
        category: categoryInput.toString(),
        id: idInput.toString()
      }),
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
