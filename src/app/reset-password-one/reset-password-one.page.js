"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ResetPasswordOnePage = void 0;
var core_1 = require("@angular/core");
// import * as emailjs from 'emailjs-com';
var ResetPasswordOnePage = /** @class */ (function () {
    // create expiration date
    function ResetPasswordOnePage(dataService) {
        this.dataService = dataService;
        this.emailTo = '';
    }
    ResetPasswordOnePage.prototype.ngOnInit = function () {
    };
    ResetPasswordOnePage.prototype.sendVerification = function () {
        this.dataService.currentCode = this.getToken();
        this.dataService.currentMailToAddress = this.emailTo;
        // console.log(this.dataService.getCurrentCode() + ' ' + this.dataService.getCurrentMailToAddress());
        // this.sendMail();
    };
    ResetPasswordOnePage.prototype.getToken = function () {
        //create random 16 character token
        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var token = '';
        for (var i = 16; i > 0; --i) {
            token += chars[Math.round(Math.random() * (chars.length - 1))];
        }
        console.log(token);
        return token;
    };
    ResetPasswordOnePage.prototype.sendMail = function () {
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
    };
    ResetPasswordOnePage = __decorate([
        core_1.Component({
            selector: 'app-reset-password-one',
            templateUrl: './reset-password-one.page.html',
            styleUrls: ['./reset-password-one.page.scss']
        })
    ], ResetPasswordOnePage);
    return ResetPasswordOnePage;
}());
exports.ResetPasswordOnePage = ResetPasswordOnePage;
