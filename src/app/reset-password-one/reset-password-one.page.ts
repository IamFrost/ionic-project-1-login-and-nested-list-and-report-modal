import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import * as dsjs from '../data.service.js';


// import * as emailjs from 'emailjs-com';
@Component({
  selector: 'app-reset-password-one',
  templateUrl: './reset-password-one.page.html',
  styleUrls: ['./reset-password-one.page.scss'],
})
export class ResetPasswordOnePage implements OnInit {

  emailTo = '';


  // create expiration date

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  sendVerification() {
    this.dataService.currentCode = this.getToken();
    this.dataService.currentMailToAddress = this.emailTo;

    dsjs.DataService.prototype.setCurrentCode(this.dataService.currentCode);
    dsjs.DataService.prototype.setCurrentMailToAddress(this.dataService.currentMailToAddress);


    console.log(this.emailTo);

    // console.log(dsjs.DataService.prototype.getCurrentCode());
    // console.log(dsjs.DataService.prototype.getCurrentMailToAddress());
    // console.log(this.dataService.getCurrentCode());
    // console.log(this.dataService.getCurrentMailToAddress());

    // console.log(this.dataService.getCurrentCode() + ' ' + this.dataService.getCurrentMailToAddress());
    // this.sendMail();

  }

  getToken() {
    //create random 16 character token
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var token = '';
    for (var i = 16; i > 0; --i) {
      token += chars[Math.round(Math.random() * (chars.length - 1))];
    }
    console.log(token);
    return token;
  }

  

  sendMail() {

    this.sendVerification();
    // const YOUR_SERVICE_ID = 'smtp_server';
    // const YOUR_TEMPLATE_ID = 'template_cw6gBO7D';
    // const YOUR_USER_ID = 'user_LFKMqEd4NRh1fo5GTI0Ms';
    // var templateParams = {
    //   name: 'James',
    //   notes: 'Check this out!'
    // };
    // emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, YOUR_USER_ID)
    //   .then(function (response) {
    //     console.log('SUCCESS!', response.status, response.text);
    //   }, function (error) {
    //     console.log('FAILED...', error);
    //   });
  }

}
