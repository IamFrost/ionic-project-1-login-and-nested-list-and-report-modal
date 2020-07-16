import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  id = '';
  password = '';
  rememberMeText = 'Remember me';

  constructor(private dataService: DataService,
    private router: Router) {

  }

  ngOnInit() {
  }

  async GetALogin() {

    if (this.id === '' || this.password === '') {
      console.log('Either wrong email and password or you need to sign up');
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
            this.forwardToNextPage();
          }
          else {
            console.log('Either wrong email and password or you need to sign up');
          }
        }
        else {
          console.log('Either wrong email and password or you need to sign up');
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
            this.forwardToNextPage();
          }
          else {
            console.log('Either wrong username and password or you need to sign up');
          }
        }
        else {
          console.log('Either wrong username and password or you need to sign up');
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
