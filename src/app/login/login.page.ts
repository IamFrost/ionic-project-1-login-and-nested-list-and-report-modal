import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LoginModalOnePage } from '../login-modal-one/login-modal-one.page';
import { LoginMessageService } from '../services/login-message/login-message.service';

import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  id = '';
  password = '';
  rememberMeText = 'Remember me';
  loginErrorText = 'hi';

  constructor(private dataService: DataService,
    private router: Router, private modalController: ModalController, 
    private loginMessageService: LoginMessageService, private popoverController: PopoverController) {
      // loginMessageService.loginMessage = this.loginErrorText;

  }

  ngOnInit() {
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: LoginModalOnePage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: LoginModalOnePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async GetALogin() {

    if (this.id === '' || this.password === '') {
      console.log('Either wrong email and password or you need to sign up');
      if(this.id === ''){
        this.loginMessageService.loginMessage = 'Please enter Username/Email';
        // this.presentModal();
        this.presentPopover(event);
      }
      else if(this.password === ''){
        this.loginMessageService.loginMessage = 'Please enter password';
        this.presentPopover(event);
      }
      
    }
    else {

      if (this.validate() === true) {
        const response = await this.dataService.Get_A_Login_2(this.id);
        const dataService = await response.json();
        console.log(dataService);
        console.log(dataService[0]['email']);
        if (dataService[0]['email'] !== '') {
          console.log('inside first if');
          if (dataService[0]['email'] === this.id && dataService[0]['password'] === this.password) {
            console.log('login ok');
            this.presentPopover(event);
          }
          else {
            console.log('Either wrong email and password or you need to sign up');
            this.loginMessageService.loginMessage = 'Email and password didn\'t match';
            this.presentPopover(event);
          }
        }
        else {
          console.log('Either wrong email and password or you need to sign up');
          this.loginMessageService.loginMessage = 'This email is not registered';
          this.presentPopover(event);
        }
      }
      else {
        const response = await this.dataService.Get_A_Login_1(this.id);
        const dataService = await response.json();
        console.log(dataService);
        console.log(dataService[0]['username']);
        if (dataService[0]['username'] !== '') {
          console.log('inside first if');
          if (dataService[0]['username'] === this.id && dataService[0]['password'] === this.password) {
            console.log('login ok');
            this.presentPopover(event);
          }
          else {
            console.log('Either wrong username and password or you need to sign up');
            this.loginMessageService.loginMessage = 'Username and password didn\'t match';
            this.presentPopover(event);
          }
        }
        else {
          console.log('Either wrong username and password or you need to sign up');
          this.loginMessageService.loginMessage = 'This username is not registered';
          this.presentPopover(event);
        }
      }
      // this.purchases = dataService;
    }

    // console.log('this is dataService array : ' +  dataService);
    // console.log('this is purchases array : ' +  this.purchases);
  }

  displayAll() {
    console.log(this.id + ' ' + this.password);
    if (this.validate() === true) {
      console.log('this is email');
      // console.log(this.dataService.Get_A_Login_2(this.id));
    }
    else {
      console.log('this is username');
      // console.log(this.dataService.Get_A_Login_1(this.id));
    }
  }



  forwardToNextPage() {
    this.router.navigate(['product-list']);
  }
  forwardToNextPage1() {
    this.router.navigate(['signup']);
  }
  forwardToNextPage2() {
    this.router.navigate(['reset-password-one']);
  }

  

  validate() {
    if (this.emailIsValid(this.id) === true) {
      return true;
    }
    return false;
  }

  emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

}
