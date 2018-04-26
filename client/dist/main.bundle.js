webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\" class='container-fluid'>\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</div>  \n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  padding: 0; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Contacts App';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page1_page1_component__ = __webpack_require__("./src/app/page1/page1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page1_add_contact_form_add_contact_form_component__ = __webpack_require__("./src/app/page1/add-contact-form/add-contact-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__page1_contact_list_contact_list_component__ = __webpack_require__("./src/app/page1/contact-list/contact-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__page2_page2_component__ = __webpack_require__("./src/app/page2/page2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_contact_service__ = __webpack_require__("./src/app/services/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: 'page1', component: __WEBPACK_IMPORTED_MODULE_7__page1_page1_component__["a" /* Page1Component */] },
    { path: 'page2/:contactId', component: __WEBPACK_IMPORTED_MODULE_10__page2_page2_component__["a" /* Page2Component */] },
    { path: '', redirectTo: '/page1', pathMatch: 'full' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__page1_add_contact_form_add_contact_form_component__["a" /* AddContactFormComponent */],
                __WEBPACK_IMPORTED_MODULE_9__page1_contact_list_contact_list_component__["a" /* ContactListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__page1_page1_component__["a" /* Page1Component */],
                __WEBPACK_IMPORTED_MODULE_10__page2_page2_component__["a" /* Page2Component */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_contact_service__["a" /* ContactService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "footer {  \n  position:absolute;\n  bottom:0;\n  width:100%;\n  height:50px;   /* Height of the footer */\n  background:rgb(145, 199, 226);\n\n\n}\n\np {\n  margin-top: 10px;\n  margin-bottom: 0;\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n    <p>\n        CSCI E-31: Assignment #7\n    </p>      \n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "#header {\n  position:absolute;\n  top:0;\n  width:100%;\n  height:60px;   /* Height of the footer */\n  background:rgb(145, 199, 226);\n  padding-top: 10px;\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='header'>\n    <h1>\n       Contacts Application\n      </h1>\n</div>\n\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/page1/add-contact-form/add-contact-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"add-contact-form\">\n  <form #form='ngForm' (ngSubmit)=\"clickAddContact(form.value)\">\n    <div>New Contact</div>\n    <div>\n      <input type='text' name='firstname' placeholder=\"Firstname\" ngModel required/>    \n      <input type='text' name='lastname' placeholder=\"Lastname\" ngModel required/>\n      <input type='text' name='phone' placeholder=\"Phone\" ngModel required/>\n    </div>\n    <button type='submit' class=\"btn btn-secondary\" [disabled]=\"!form.form.valid\"> Add Contact </button>    \n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/page1/add-contact-form/add-contact-form.component.scss":
/***/ (function(module, exports) {

module.exports = "#add-contact-form {\n  width: 300px;\n  height: 400px;\n  border: 1px solid lightgray;\n  padding-top: 10px; }\n  #add-contact-form input {\n    margin: 5px 0;\n    padding: 5px;\n    text-align: center; }\n  #add-contact-form button {\n    margin-top: 10px; }\n"

/***/ }),

/***/ "./src/app/page1/add-contact-form/add-contact-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddContactFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_contact_service__ = __webpack_require__("./src/app/services/contact.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddContactFormComponent = /** @class */ (function () {
    function AddContactFormComponent(contactService) {
        this.contactService = contactService;
        this.addContactEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    AddContactFormComponent.prototype.clickAddContact = function (formObj) {
        var _this = this;
        console.log(formObj);
        var contactObj = {
            firstname: formObj.firstname,
            lastname: formObj.lastname,
            phone: formObj.phone,
        };
        this.contactService.createContact(contactObj).subscribe(function (data) {
            _this.addContactEvent.emit();
            console.log('create new contact success!');
        });
        console.log('contact: ' + JSON.stringify(contactObj));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddContactFormComponent.prototype, "addContactEvent", void 0);
    AddContactFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-contact-form',
            template: __webpack_require__("./src/app/page1/add-contact-form/add-contact-form.component.html"),
            styles: [__webpack_require__("./src/app/page1/add-contact-form/add-contact-form.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_contact_service__["a" /* ContactService */]])
    ], AddContactFormComponent);
    return AddContactFormComponent;
}());



/***/ }),

/***/ "./src/app/page1/contact-list/contact-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"contact-list\">\n    <table class=\"table\">\n        <thead>\n          <tr>\n            <th scope=\"col\">ID</th>\n            <th scope=\"col\">First</th>\n            <th scope=\"col\">Last</th>\n            <th scope=\"col\">Phone</th>\n            <th scope=\"col\">Action</th>\n          </tr>\n        </thead>\n        <tbody (addAccountEvent)='addContactEventHandler()'>\n          <tr *ngFor='let contact of contacts' >\n              <th scope=\"row\">{{contact._id}}</th>\n              <td>{{contact.firstname}}</td>\n              <td>{{contact.lastname}}</td>\n              <td>{{contact.phone}}</td>\n              <td><a routerLink='/page2/{{contact._id}}' routerLinkActive='active'>Edit/Del</a></td>\n          </tr>\n        </tbody>\n      </table>\n</div>"

/***/ }),

/***/ "./src/app/page1/contact-list/contact-list.component.scss":
/***/ (function(module, exports) {

module.exports = "#contact-list {\n  border: 1px solid lightgray;\n  margin-left: 10px;\n  height: 500px;\n  width: 600px; }\n"

/***/ }),

/***/ "./src/app/page1/contact-list/contact-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactListComponent = /** @class */ (function () {
    function ContactListComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContactListComponent.prototype, "contacts", void 0);
    ContactListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact-list',
            template: __webpack_require__("./src/app/page1/contact-list/contact-list.component.html"),
            styles: [__webpack_require__("./src/app/page1/contact-list/contact-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactListComponent);
    return ContactListComponent;
}());



/***/ }),

/***/ "./src/app/page1/page1.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page1\">\n    <app-add-contact-form (addContactEvent)=\"updateContactList()\"></app-add-contact-form>\n    <app-contact-list [contacts]=\"contacts\" > </app-contact-list>\n</div>"

/***/ }),

/***/ "./src/app/page1/page1.component.scss":
/***/ (function(module, exports) {

module.exports = "#page1 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-top: 100px; }\n"

/***/ }),

/***/ "./src/app/page1/page1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_contact_service__ = __webpack_require__("./src/app/services/contact.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Page1Component = /** @class */ (function () {
    function Page1Component(contactService) {
        this.contactService = contactService;
        this.contacts = null;
    }
    Page1Component.prototype.ngOnInit = function () {
        this.updateContactList();
    };
    Page1Component.prototype.updateContactList = function () {
        var _this = this;
        this.contactService.listContacts().subscribe(function (contacts) {
            _this.contacts = contacts;
        });
    };
    Page1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page1',
            template: __webpack_require__("./src/app/page1/page1.component.html"),
            styles: [__webpack_require__("./src/app/page1/page1.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_contact_service__["a" /* ContactService */]])
    ], Page1Component);
    return Page1Component;
}());



/***/ }),

/***/ "./src/app/page2/page2.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='page2'>\n  \n  <div id='contact-view'>\n      View Contact\n      <div id='row2'>\n\n        <div id='photo'>\n          <img src='/assets/page2/images/blank-face.jpeg'>\n        </div>\n        <div id='info'>\n          <table>\n            <tr>\n              <td id='label'>ID</td>\n              <td id='input'><span id=\"contactId\">{{contact._id}}</span></td>\n            </tr>\n            <tr>\n              <td>Firstname</td>\n              <td><input type='text' name='firstname' value='{{contact.firstname}}' placeholder=\"Firstname\" /></td>\n            </tr>\n            <tr>\n              <td>Lastname</td>\n              <td><input type='text' name='lastname' value='{{contact.lastname}}' placeholder=\"Lastname\" /></td>\n            </tr>\n            <tr>\n              <td>Phone</td>\n              <td><input type='text' name='phone' value='{{contact.phone}}' placeholder=\"Phone\" /></td>\n            </tr>\n          </table>\n          <div id='buttons'>\n              <button class=\"btn btn-secondary\" id='btn-update'>Update</button>\n              <button class=\"btn btn-secondary\">Delete</button>\n          </div>\n      </div>\n  </div>\n</div>\n<div class='nav'>\n    <a routerLink='/page1' routerLinkActive='active'><< Back >></a>\n</div>\n"

/***/ }),

/***/ "./src/app/page2/page2.component.scss":
/***/ (function(module, exports) {

module.exports = "#page2 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-top: 100px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  #page2 .nav {\n    padding: 10px 0; }\n  #page2 #contact-view {\n    border: 1px solid lightgray; }\n  #page2 #contactId {\n    padding-left: 10px; }\n  #contact-view {\n  padding: 20px; }\n  #contact-view #info {\n    padding: 20px; }\n  #contact-view #photo img {\n    width: 200px; }\n  #contact-view table {\n    text-align: left;\n    margin: 10px; }\n  #contact-view table #label {\n      width: 100px; }\n  #contact-view table #input {\n      width: 200px; }\n  #contact-view table input {\n      width: 300px;\n      margin-bottom: 5px; }\n  #contact-view #buttons {\n    margin-top: 40px; }\n  #contact-view #row2 {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n  #contact-view #btn-update {\n    margin-right: 20px; }\n"

/***/ }),

/***/ "./src/app/page2/page2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_contact_service__ = __webpack_require__("./src/app/services/contact.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Page2Component = /** @class */ (function () {
    function Page2Component(contactService, route) {
        this.contactService = contactService;
        this.route = route;
        this.contact = {
            _id: '',
            firstname: '',
            lastName: '',
            phone: '',
        };
    }
    Page2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var contactId = params['contactId'];
            _this.contactService.getContact(contactId).subscribe(function (contact) {
                return _this.contact = contact;
            });
        });
    };
    Page2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page2',
            template: __webpack_require__("./src/app/page2/page2.component.html"),
            styles: [__webpack_require__("./src/app/page2/page2.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_contact_service__["a" /* ContactService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_contact_service__["a" /* ContactService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], Page2Component);
    return Page2Component;
}());



/***/ }),

/***/ "./src/app/services/contact.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactService = /** @class */ (function () {
    function ContactService(http) {
        this.http = http;
        this.apiurl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiurl;
    }
    ContactService.prototype.listContacts = function () {
        return this.http.get(this.apiurl + '/api/contacts');
    };
    ContactService.prototype.getContact = function (id) {
        return this.http.get(this.apiurl + '/api/contacts/' + id);
    };
    ContactService.prototype.createContact = function (contactObj) {
        return this.http.post(this.apiurl + '/api/contacts/create', contactObj);
    };
    ContactService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiurl: ''
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map