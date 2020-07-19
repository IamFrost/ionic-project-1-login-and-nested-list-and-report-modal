import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YearinfoService {

  PROTOCOL = 'http';
  HOST = 'localhost';
  PORT = '3001';
  SUBDOMAIN = 'yearinfo';

  // baseURLYearInfo = 'http://localhost:3001/products';
  // baseURLYearInfoWithSlash = 'http://localhost:3001/products' + '/';
  baseURLYearInfo = this.PROTOCOL + '://' + this.HOST + ':' + this.PORT + '/' + this.SUBDOMAIN;
  baseURLYearInfoWithSlash = this.PROTOCOL + '://' + this.HOST + ':' + this.PORT + '/' + this.SUBDOMAIN + '/';


  yearsInfo;
  yearsDescription;

  //CRUD Functions

  GetYears() {
    // console.log('this is company domain : ' + this.baseURLYearInfo);
    return fetch((this.baseURLYearInfo));
  }

  Get_A_Year(brid: string) {
    return fetch(this.baseURLYearInfoWithSlash + '?yearid=' + brid);
  }

  Delete_A_Year(brid: string) {
    return fetch(this.baseURLYearInfoWithSlash + '?yearid=' + brid, {
      method: 'DELETE'
    });
  }

  Create_A_Year(yearidInput: string, yearcodeInput: string, openingfieldInput: string,
    startdateInput: string, enddateInput: string, descriptionInput: string) {
    console.log('from create at yearinfo.service.ts : ' + yearidInput + ' ' + yearcodeInput + ' '
      + openingfieldInput + ' ' + startdateInput + ' ' + enddateInput + ' ' + descriptionInput);
    return fetch(this.baseURLYearInfo, {
      method: 'POST',
      body: JSON.stringify({
        yearid: yearidInput.toString(),
        yearcode: yearcodeInput.toString(),
        openingfield: openingfieldInput.toString(),
        startdate: startdateInput.toString(),
        enddate: enddateInput.toString(),
        description: descriptionInput.toString()
      }),
      headers: { 'Content-Type': 'application/json' }
    });
  }

  Update_A_Year(yearidInput: string, yearcodeInput: string, openingfieldInput: string,
    startdateInput: string, enddateInput: string, descriptionInput: string) {
    console.log('from create at yearinfo.service.ts : ' + yearidInput + ' ' + yearcodeInput + ' '
    + openingfieldInput + ' ' + startdateInput + ' ' + enddateInput + ' ' + descriptionInput);
    return fetch(this.baseURLYearInfoWithSlash + '?yearid=' + yearidInput, {
      method: 'PUT',
      body: JSON.stringify({
        yearid: yearidInput.toString(),
        yearcode: yearcodeInput.toString(),
        openingfield: openingfieldInput.toString(),
        startdate: startdateInput.toString(),
        enddate: enddateInput.toString(),
        description: descriptionInput.toString()
      }),
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
