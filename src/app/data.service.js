"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DataService = void 0;
var core_1 = require("@angular/core");
var DataService = /** @class */ (function () {
    function DataService(httpCLient) {
        this.httpCLient = httpCLient;
        this.navigateFromDisplayFlag = 0;
        this.response = [];
        this.modalResponse = [];
        this.baseURLProducts = 'http://localhost:3000/products';
        this.baseURLProductswithSlash = 'http://localhost:3000/products' + '/';
        this.baseURLLogins = 'http://localhost:3000/logins';
        this.baseURLLoginswithSlash = 'http://localhost:3000/logins' + '/';
    }
    DataService.prototype.setCurrentMailToAddress = function (email) {
        this.currentMailToAddress = email;
    };
    DataService.prototype.getCurrentMailToAddress = function () {
        return this.currentMailToAddress;
    };
    DataService.prototype.setCurrentCode = function (code) {
        this.currentCode = code;
    };
    DataService.prototype.getCurrentCode = function () {
        return this.currentCode;
    };
    DataService.prototype.setCurrentProduct = function (product) {
        this.currentProduct = product;
    };
    DataService.prototype.getCurrentProduct = function () {
        return this.currentProduct;
    };
    DataService.prototype.GetLogins = function () {
        return fetch((this.baseURLLogins));
    };
    DataService.prototype.GetProducts = function () {
        return fetch((this.baseURLProducts));
    };
    DataService.prototype.Get_A_Login_1 = function (id) {
        return fetch(this.baseURLLoginswithSlash + '1' + '/' + id);
    };
    DataService.prototype.Get_A_Login_2 = function (id) {
        return fetch(this.baseURLLoginswithSlash + '2' + '/' + id);
    };
    DataService.prototype.Get_A_Product = function (id) {
        return fetch(this.baseURLProductswithSlash + id);
    };
    DataService.prototype.Delete_A_Product = function (id) {
        return fetch(this.baseURLProductswithSlash + id, {
            method: 'DELETE'
        });
    };
    DataService.prototype.Create_A_Product = function (nameInput, showroomInput, stockInput, typeInput, categoryInput, idInput) {
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
    };
    DataService.prototype.Create_A_Login = function (username1, email1, password1) {
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
    };
    DataService.prototype.Update_A_Product = function (nameInput, showroomInput, stockInput, typeInput, categoryInput, idInput) {
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
    };
    DataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
