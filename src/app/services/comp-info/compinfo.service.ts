import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompinfoService {

  PROTOCOL = 'http'
  HOST = 'localhost';
  PORT = '3001';
  SUBDOMAIN = 'products'

  // baseURLCompanyInfo = 'http://localhost:3001/products';
  // baseURLCompanyInfoWithSlash = 'http://localhost:3001/products' + '/';
  baseURLCompanyInfo = this.PROTOCOL + '://' + this.HOST + '/' + this.PORT + '/' + this.SUBDOMAIN;
  baseURLCompanyInfoWithSlash = this.PROTOCOL + '://' + this.HOST + '/' + this.PORT + '/' + this.SUBDOMAIN + '/';



  //CRUD Functions

  GetCompanies() {
    return fetch((this.baseURLCompanyInfo));
  }

  Get_A_Company(brid: string) {
    return fetch(this.baseURLCompanyInfoWithSlash + '?brid=' + brid);
  }

  Delete_A_Company(brid: string) {
    return fetch(this.baseURLCompanyInfoWithSlash + '?brid=' + brid, {
      method: 'DELETE'
    });
  }

  Create_A_Company(bridInput: string, compnameInput: string, brnameInput: string,
    addressInput: string, phoneInput: string, faxInput: string, emailInput: string[],
    webInput: string, contactpersonInput: string, binInput: string) {
    console.log('from create at compinfo.service.ts : ' + bridInput + ' ' + compnameInput + ' '
      + brnameInput + ' ' + addressInput + ' ' + phoneInput + ' ' + faxInput + ' '
      + emailInput + ' ' + webInput + ' ' + contactpersonInput + ' ' + binInput);
    return fetch(this.baseURLCompanyInfo, {
      method: 'POST',
      body: JSON.stringify({
        brid: bridInput.toString(),
        compname: compnameInput.toString(),
        brname: brnameInput.toString(),
        address: addressInput.toString(),
        phone: phoneInput.toString(),
        fax: faxInput.toString(),
        email: emailInput.toString(),
        web: webInput.toString(),
        contactperson: contactpersonInput.toString(),
        bin: binInput.toString()
      }),
      headers: { 'Content-Type': 'application/json' }
    });
  }

  Update_A_Company(bridInput: string, compnameInput: string, brnameInput: string,
    addressInput: string, phoneInput: string, faxInput: string, emailInput: string[],
    webInput: string, contactpersonInput: string, binInput: string) {
    console.log('from update at compinfo.service.ts : ' + bridInput + ' ' + compnameInput + ' '
      + brnameInput + ' ' + addressInput + ' ' + phoneInput + ' ' + faxInput + ' '
      + emailInput + ' ' + webInput + ' ' + contactpersonInput + ' ' + binInput);
    return fetch(this.baseURLCompanyInfoWithSlash + '?brid=' + bridInput, {
      method: 'PUT',
      body: JSON.stringify({
        brid: bridInput.toString(),
        compname: compnameInput.toString(),
        brname: brnameInput.toString(),
        address: addressInput.toString(),
        phone: phoneInput.toString(),
        fax: faxInput.toString(),
        email: emailInput.toString(),
        web: webInput.toString(),
        contactperson: contactpersonInput.toString(),
        bin: binInput.toString()
      }),
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
