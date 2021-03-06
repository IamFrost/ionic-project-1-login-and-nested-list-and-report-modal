import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginMessageService } from '../services/login-message/login-message.service';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-login-modal-one',
  templateUrl: './login-modal-one.page.html',
  styleUrls: ['./login-modal-one.page.scss'],
})
export class LoginModalOnePage implements OnInit {

  errorText;

  constructor(private modalController: ModalController,
    loginMessageService: LoginMessageService,private popoverController: PopoverController) {
    this.errorText = loginMessageService.loginMessage;
  }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    // this.modalController.dismiss({
    //   dismissed: true
    // });

    this.popoverController.dismiss({
      dismissed: true
    });
  }

}
