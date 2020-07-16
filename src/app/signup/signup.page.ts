import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  username1 = '';
  email1 = '';
  password1 = '';
  confirmPassword1 = '';

  constructor(private dataService: DataService,
              private router: Router) {

  }

  ngOnInit() {
  }

  async CreateALogin() {

    if (this.username1 === '' || this.email1 === '' || this.password1 === '' || this.confirmPassword1 === '' || this.emailIsValid(this.email1) === false) {
      console.log('Fields can not be blank');
    }
    else {

      if (this.password1 === this.confirmPassword1) {
        const response = await this.dataService.Create_A_Login(this.username1, this.email1, this.password1);
        this.forwardToNextPage();
        // const dataService = await response.json();
        // console.log(dataService);
      }

      // this.purchases = dataService;
    }

    // console.log('this is dataService array : ' +  dataService);
    // console.log('this is purchases array : ' +  this.purchases);
  }

  forwardToNextPage() {
    this.router.navigate(['login']);
  }

  displayAll(){
    console.log(this.username1 + ' ' + this.email1 + ' ' + this.password1 + ' ' + this.confirmPassword1);
  }

  emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  

}
