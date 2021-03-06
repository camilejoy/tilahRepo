(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid p-0 m-0\">\r\n    <mdb-navbar SideClass=\"navbar navbar-1 navbar-light bg-red-style text-light lighten-2\" [containerInside]=\"false\">\r\n        <mdb-navbar-brand>\r\n            <a class=\"navbar-brand link-unstyled text-light brand-style mb-1\" routerLink=\"/dashboard\">\r\n                <h5 class=\"mb-0 pb-0\">TILAH SEED CENTER</h5><br>\r\n                <small>Maligaya Branch</small>\r\n            </a>\r\n        </mdb-navbar-brand>\r\n        <links>\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <li class=\"nav-item\">\r\n                    <a routerLink=\"/seed\" class=\"nav-link link-unstyled text-light\">Seed<span class=\"sr-only\">(current)</span></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a routerLink=\"/user\" class=\"nav-link link-unstyled text-light\" [hidden]=\"role\">User</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a (click)=\"logoutModal(logout)\" class=\"nav-link link-unstyled text-light\">Logout</a>\r\n                </li> \r\n            </ul>\r\n        </links>\r\n    </mdb-navbar>\r\n    <div class=\"row mx-0\">\r\n        <div class=\"col-lg-8 mx-auto\">\r\n            <h4 class=\"bg-header text-light p-3 text-center my-2 shadow\">Seed Sales Report</h4>\r\n            <form (submit)=\"setChartData()\">\r\n                <div class=\"my-2\">\r\n                    <label>Choose category</label>\r\n                    <select name=\"cat\" [(ngModel)]=\"cat\" class=\"form-control\">\r\n                        <option selected=\"selected\" disabled>Choose Category</option>\r\n                        <option *ngFor=\"let cat of category\" [ngValue]=\"cat\">{{cat}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"cat != ''\">\r\n                        <div *ngIf=\"cat == 'Seed Name'\" class=\"my-2 row\">\r\n                            <div class=\"col-lg-6\">\r\n                                <select name=\"seedname\" [(ngModel)]=\"seedname\" class=\"form-control\">\r\n                                    <option selected=\"selected\" disabled>Choose Seed Name</option>\r\n                                    <option *ngFor=\"let s of seeds\" [ngValue]=\"s.name\">{{s.name}}</option>\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"col-lg-6\">\r\n                                <select name=\"seedname1\" [(ngModel)]=\"seedname1\" class=\"form-control\">\r\n                                    <option selected=\"selected\" disabled>Choose Seed Name</option>\r\n                                    <option *ngFor=\"let s of seeds\" [ngValue]=\"s.name\">{{s.name}}</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"cat == 'Seed Variety'\" class=\"my-2 row\">\r\n                            <div class=\"col-lg-6\">\r\n                                <select name=\"seedvariety\" [(ngModel)]=\"seedvariety\" class=\"form-control\">\r\n                                    <option selected=\"selected\" disabled>Choose Variety</option>\r\n                                    <option *ngFor=\"let v of variety\" [ngValue]=\"v\">{{v|titlecase}}</option>\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"col-lg-6\">\r\n                                <select name=\"seedvariety1\" [(ngModel)]=\"seedvariety1\" class=\"form-control\">\r\n                                    <option selected=\"selected\" disabled>Choose Variety</option>\r\n                                    <option *ngFor=\"let v of variety\" [ngValue]=\"v\">{{v|titlecase}}</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"cat == 'Seed Classification'\" class=\"my-2 row\">\r\n                            <div class=\"col-lg-6\">\r\n                                <select name=\"seedclass\" [(ngModel)]=\"seedclass\" class=\"form-control\">\r\n                                    <option selected=\"selected\" disabled>Choose Classification</option>\r\n                                    <option *ngFor=\"let c of classification\" [ngValue]=\"c\">{{c|titlecase}}</option>\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"col-lg-6\">\r\n                                <select name=\"seedclass1\" [(ngModel)]=\"seedclass1\" class=\"form-control\">\r\n                                    <option selected=\"selected\" disabled>Choose Classification</option>\r\n                                    <option *ngFor=\"let c of classification\" [ngValue]=\"c\">{{c|titlecase}}</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"d-flex justify-content-center\">\r\n                    <button type=\"submit\" class=\"btn btn-sm btn-primary\">Submit</button>\r\n                </div>\r\n            </form> \r\n        </div>\r\n    </div>\r\n    <div class=\"row mx-0\">\r\n        <div class=\"col-lg-8 mx-auto my-2\">\r\n            <div style=\"display: block\">\r\n                <canvas mdbChart\r\n                    [chartType]=\"chartType\"\r\n                    [datasets]=\"chartDatasets\"\r\n                    [labels]=\"chartLabels\"\r\n                    [colors]=\"chartColors\"\r\n                    [options]=\"chartOptions\"\r\n                    [legend]=\"true\"\r\n                    (chartHover)=\"chartHovered($event)\"\r\n                    (chartClick)=\"chartClicked($event)\">\r\n                </canvas>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- total Sales: {{totalSales}}\r\n<br>\r\nNumber of Seed Sold: {{totalCount}} -->\r\n\r\n<ng-template #logout let-modal>\r\n    <div class=\"modal-header bg-danger text-light\">\r\n        <h5 class=\"modal-title\">Are you sure you want to Logout?</h5>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body d-flex justify-content-center\">\r\n        <button type=\"button\" (click)=\"clickLogout(modal.dismiss())\" class=\"btn btn-danger hvr-buzz\">YES</button>\r\n        <button type=\"button\" (click)=\"modal.dismiss()\" class=\"btn btn-light\">Cancel</button>\r\n    </div>\r\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>history works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid m-0 p-0\">\n    <div class=\"row m-0 p-0\">\n        <div class=\"col-lg-6 bg-red px-0 d-flex justify-content-end\">\n            <div class=\"col-lg-6 login-container-left align-self-center\">\n                <div class=\"login-style-left py-3 d-flex justify-content-center flex-column\">\n                    <img src=\"\" class=\"logo align-self-center\">\n                    <h4 class=\"text-light text-center\">TILAH - Maligaya Branch</h4>\n                    <h6 class=\"text-light text-center\">INVENTORY SYSTEM</h6>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-6 white px-0 d-flex justify-content-start\">\n            <div class=\"col-lg-6 login-container-right align-self-center\">\n                <div class=\"login-style-right p-3\">\n                    <h3 class=\"text-center mb-3 text-uppercase text-spacing text-red\">Login</h3>\n                    <hr class=\"hr-style\">\n                    <form [formGroup]=\"myform\" class=\"\">\n                        <div class=\"md-form\">\n                            <input mdbInput mdbValidate type=\"text\" formControlName=\"username\" name=\"userName\" [(ngModel)]=\"userName\" required\n                                id=\"uname\" class=\"form-control\">\n                                <label for=\"uname\">Type your username</label>\n                                <mdb-error *ngIf=\"username.invalid && (username.dirty || username.touched)\">**Input Invalid</mdb-error>\n                                <!-- <mdb-success *ngIf=\"username.valid && (username.dirty || username.touched)\">Input Valid</mdb-success> -->\n                        </div>\n                        <div class=\"md-form\">\n                            <input mdbInput mdbValidate type=\"password\" formControlName=\"password\" name=\"passWord\" [(ngModel)]=\"passWord\" required\n                                id=\"pword\" minlength=\"6\" class=\"form-control\">\n                                <label for=\"pword\">Type your password</label>\n                                <mdb-error *ngIf=\"password.invalid && (password.dirty || password.touched)\">**Input Invalid</mdb-error>\n                                <!-- <mdb-success *ngIf=\"password.valid && (password.dirty || password.touched)\">Input Valid</mdb-success> -->\n                        </div>\n                        <div class=\"md-form d-flex justify-content-center\">\n                            <button mdbBtn class=\"btn btn-outline-danger btn-sm my-2 hvr-grow\" (click)=\"clickLogin(deletedModal)\">Log In</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #deletedModal let-modal>\n    <div class=\"modal-header bg-success py-4\">\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body d-flex justify-content-center py-3\" [ngSwitch]=\"action\">\n        <h5 class=\"modal-title\" *ngSwitchCase=\"'user'\">Logged In! Welcome User!</h5>\n        <h5 class=\"modal-title\" *ngSwitchCase=\"'admin'\">Logged In! Welcome Admin!</h5>\n        <h5 class=\"modal-title\" *ngSwitchCase=\"'invalid'\">Invalid or Incorrect Credentials!</h5>\n        <div class=\"modal-body d-flex justify-content-center\">\n            <button type=\"button\" class=\"btn btn-success\" *ngIf=\"action == 'admin'\" (click)=\"clickOk('dashboard'); modal.dismiss()\">OK</button>\n            <button type=\"button\" class=\"btn btn-success\" *ngIf=\"action == 'user'\" (click)=\"clickOk('pointOfSale'); modal.dismiss()\">OK</button>\n            <button type=\"button\" class=\"btn btn-success\" *ngIf=\"action == 'invalid'\" (click)=\"clickOk('login'); modal.dismiss()\">OK</button>\n        </div>\n    </div>\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/logs/logs.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logs/logs.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid p-0 m-0\">\n    <mdb-navbar SideClass=\"navbar navbar-1 navbar-light bg-red-style text-light lighten-2\" [containerInside]=\"false\">\n        <mdb-navbar-brand>\n            <a class=\"navbar-brand link-unstyled text-light brand-style mb-1\" routerLink=\"/dashboard\">\n                <h5 class=\"mb-0 pb-0\">TILAH SEED CENTER</h5><br>\n                <small>Maligaya Branch</small>\n            </a>\n            <!-- <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span class=\"navbar-toggler-icon bg-light\"></span>\n            </button> -->\n        </mdb-navbar-brand>\n        <links>\n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item\">\n                    <a routerLink=\"/dashboard\" class=\"nav-link link-unstyled text-light\" [hidden]=\"role\">Dashboard<span class=\"sr-only\">(current)</span></a>\n                </li>\n                <li class=\"nav-item\">\n                    <a routerLink=\"/seed\" class=\"nav-link link-unstyled text-light\">Seed<span class=\"sr-only\">(current)</span></a>\n                </li>\n                <li class=\"nav-item\">\n                    <a routerLink=\"/user\" class=\"nav-link link-unstyled text-light\" [hidden]=\"role\">User</a>\n                </li>\n                <!-- <li class=\"nav-item\">\n                    <a (click)=\"logoutModal(logout)\" class=\"nav-link link-unstyled text-light\">Logout</a>\n                </li>  -->\n            </ul>\n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item\">\n                    <a (click)=\"logoutModal(logout)\" class=\"nav-link link-unstyled text-light\">Logout</a>\n                </li>  \n            </ul>\n        </links>\n    </mdb-navbar>\n    <div class=\"row m-0 mb-2\">\n        <div class=\"col-10 offset-1 p-3 shadow mt-4\">\n        <div class=\"row p-3\">\n            <div class=\"col-2 d-flex justify-content-start\">\n            \n            </div>\n            <div class=\"col-8 d-flex justify-content-center\">\n            <h3 class=\"text-spacing text-uppercase hvr-float\">History</h3>\n            </div>\n            <div class=\"col-2 d-flex justify-content-end\">\n                \n            </div>\n        </div>\n        <div class=\"table-style\">\n            <table mdbTable #tableEl=\"mdbTable\" class=\"table z-depth-1\" hover=\"true\">\n\n                <thead>\n                    <tr class=\"thead-light sticky-top\">\n                        <th *ngFor=\"let head of headElements; let i = index\" scope=\"col\">{{head}}</th>\n                    </tr>\n                </thead>\n\n                <tbody>\n                    <tr *ngFor=\"let log of logs; let i = index\">\n                        <th *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\"\n                        scope=\"row\">{{log.userName}}</th>\n                        <td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\">{{log.seedname}}</td>\n                        <td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\">{{log.action}}</td>\n                        <td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\">{{log.dateModified | date:'mediumDate'}}</td>\n                    </tr>\n                </tbody>\n\n                <tfoot class=\"grey lighten-5 w-100\">\n                    <tr>\n                        <td colspan=\"12\">\n                            <mdb-table-pagination [tableEl]=\"tableEl\" [searchDataSource]=\"logs\"></mdb-table-pagination>\n                        </td>\n                    </tr>\n                </tfoot>\n            </table>\n        </div>\n    </div>\n</div>\n<footer class=\"footer fixed-bottom\"></footer>\n</div>\n<ng-template #logout let-modal>\n    <div class=\"modal-header bg-danger text-light\">\n        <h5 class=\"modal-title\">Are you sure you want to Logout?</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body d-flex justify-content-center\">\n        <button type=\"button\" (click)=\"clickLogout(modal.dismiss())\" class=\"btn btn-danger hvr-buzz\">YES</button>\n        <button type=\"button\" (click)=\"modal.dismiss()\" class=\"btn btn-light\">Cancel</button>\n    </div>\n  </ng-template>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 py-5 my-5\">\n            <div class=\"col-lg-5 mx-auto bg-danger text-light d-flex justify-content-center p-3 hvr-grow\">\n                <h2 class=\"\">Page Not Found!!</h2>\n            </div>\n        </div>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pos/pos.component.html": 
        /*!******************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pos/pos.component.html ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid p-0 m-0\">\n  <mdb-navbar SideClass=\"navbar navbar-1 navbar-light bg-red-style text-light lighten-2\" [containerInside]=\"false\">\n    <mdb-navbar-brand>\n      <a class=\"navbar-brand link-unstyled text-light brand-style mb-1\" routerLink=\"/\">\n        <h5 class=\"mb-0 pb-0\">TILAH SEED CENTER</h5><br>\n        <small>Maligaya Branch</small>\n      </a>\n    </mdb-navbar-brand>\n    <links>\n      <ul class=\"navbar-nav mr-auto\">\n          <!-- <li class=\"nav-item active\">\n              <a routerLink=\"/dashboard\" class=\"nav-link link-unstyled text-light\" [hidden]=\"role\">Dashboard<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item active\">\n              <a routerLink=\"/seed\" class=\"nav-link link-unstyled text-light\">Seed<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n              <a routerLink=\"/user\" class=\"nav-link link-unstyled text-light\" [hidden]=\"role\">User</a>\n          </li> -->\n          <li class=\"nav-item\">\n              <a (click)=\"logoutModal(logout)\" class=\"nav-link link-unstyled text-light\">Logout</a>\n          </li> \n      </ul>\n  </links>\n</mdb-navbar>\n  <div class=\"row mx-0 p-4\">\n    <div class=\"col-lg-4 col-sm-12\">\n        <h3 class=\"\">Select Item Here</h3>\n        <div class=\"row\">\n          <div class=\"table-responsive overflow-y pos-table-style\">\n            <table class=\"table\">\n              <tr *ngFor=\"let item of items\">\n                <td class=\"mx-0 my-1 p-0\">\n                  <button (click)=\"onClick(item._id)\" color=\"#\" class=\"text-left btn-sm\" block=\"true\" mdbBtn type=\"button\" rounded=\"true\" mdbWavesEffect><h5>{{item.name}}</h5></button>\n                </td>\n              </tr>\n            </table>\n          </div>\n          <div class=\"col-12 px-0 mt-4 pt-3\">\n            <a routerLink=\"/seed\"><button class=\"btn-sm\" mdbBtn block=\"true\" type=\"button\" rounded=\"true\" mdbWavesEffect><h4>Manage Seeds</h4></button></a>\n          </div>\n        </div>          \n    </div>\n    <div class=\"col-lg-8 col-sm-12\">\n      <h3 class=\"\">Order Summary</h3>\n      <div class=\"table-responsive overflow-y pos-table-style\">\n          <table mdbTable class=\"table\">\n            <tr class=\"thead-light sticky-top\">\n              <th *ngFor=\"let head of headElements\" scope=\"col\" class=\"\">{{head}}</th>\n            </tr>\n            <tr mdbTableCol *ngFor=\"let order of orders\">\n              <th scope=\"row\">{{order.name}}</th>\n              <td>{{order.price}}</td>\n              <td>{{order.quantity}}</td>\n              <td>{{order.amount}}</td>\n            </tr>\n        </table>\n      </div>\n      <div class=\"row px-1\">\n        <div class=\"col-2\"><h5 class=\"font-weight-bold\">Total:</h5></div>\n        <div class=\"col-7\"></div>\n        <div class=\"col-3\"><h5 class=\"font-weight-bold\">{{total}}</h5></div>\n      </div>\n      <div class=\"row mt-1 pt-1\">\n        <div class=\"col-lg-6 col-sm-12\">\n          <button (click)=\"clickClear()\" class=\"btn-sm\" mdbBtn block=\"true\" type=\"button\" mdbWavesEffect><h4>Clear order</h4></button>\n        </div>\n        <div class=\"col-lg-6 col-sm-12\" *ngIf=\"orders.length != 0; else elseBlock\">\n            <button class=\"btn-sm\" mdbBtn block=\"true\" type=\"button\" (click)=\"basicModal.show()\" mdbWavesEffect><h4>PAY</h4></button>\n        </div>\n        <ng-template #elseBlock>\n          <div class=\"col-lg-6 col-sm-12\">\n            <button class=\"btn-sm\" mdbBtn block=\"true\" type=\"button\" mdbWavesEffect disabled><h4>PAY</h4></button>\n          </div>\n        </ng-template>\n      </div>\n  </div>\n  <footer class=\"footer fixed-bottom\"></footer>\n</div>\n\n<div mdbModal #basicModal=\"mdbModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog \" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-primary text-light\">\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"basicModal.hide()\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n        <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Order Summary</h4>\n      </div>\n      <div class=\"modal-body overflow-y\">\n        <div class=\"row\" *ngFor=\"let order of orders\">\n          <div class=\"col-3\">{{order.name}}</div>\n          <div class=\"col-2\">x {{order.quantity}}</div>\n          <div class=\"col-4\">@ {{order.price}}</div>\n          <div class=\"col-3\">{{order.amount}}</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-8\"><h3>Total: </h3></div>\n          <div class=\"col-4\"><h3>{{total}}</h3></div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-8\"><h3>Enter Payment: </h3></div>\n          <div class=\"col-4\">\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"payment\" [(ngModel)]=\"change\" required>\n          </div>\n        </div>\n          <div class=\"row\">\n            <div class=\"col-8\"><h3>Change: </h3></div>\n            <div class=\"col-4\"><h3>{{change - total}}</h3></div>\n          </div>\n      </div>\n      <div class=\"modal-footer\" *ngIf=\"(change - total) >= 0; else eb\">\n        <button type=\"button\" mdbBtn color=\"primary\" class=\"relative waves-light form-control btn-sm\" (click)=\"payModal(pay); basicModal.hide()\" mdbWavesEffect>PAY</button>\n      </div>\n      <ng-template #eb>\n        <button type=\"button\" mdbBtn color=\"primary\" class=\"mx-0 waves-light form-control btn-sm\" (click)=\"clickPay()\" mdbWavesEffect disabled>PAY</button>\n      </ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n<ng-template #logout let-modal>\n  <div class=\"modal-header bg-danger text-light\">\n      <h5 class=\"modal-title\">Are you sure you want to Logout?</h5>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n      </button>\n  </div>\n  <div class=\"modal-body d-flex justify-content-center\">\n      <button type=\"button\" (click)=\"clickLogout(modal.dismiss())\" class=\"btn btn-danger hvr-buzz\">YES</button>\n      <button type=\"button\" (click)=\"modal.dismiss()\" class=\"btn btn-light\">Cancel</button>\n  </div>\n</ng-template>\n\n<ng-template #pay let-modal>\n    <div class=\"modal-header bg-success text-light d-flex justify-content-center\">\n        <h5 class=\"modal-title\">PAID!</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n  <div class=\"modal-body d-flex justify-content-center\">\n    <button type=\"button\" (click)=\"clickPay(modal.dismiss())\" class=\"btn btn-sm btn-success hvr-buzz\">OK</button>\n  </div>\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/seed/seed.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seed/seed.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!---------------------------------SEED------------------------------------>\n<div class=\"container-fluid p-0 m-0\">\n    <mdb-navbar SideClass=\"navbar navbar-1 navbar-light bg-red-style text-light lighten-2\" [containerInside]=\"false\">\n        <mdb-navbar-brand>\n            <div *ngIf=\"role; else elseBlock\">\n                <a class=\"navbar-brand link-unstyled text-light brand-style mb-1\" routerLink=\"/pointOfSale\">\n                    <h5 class=\"mb-0 pb-0\">TILAH SEED CENTER</h5><br>\n                    <small>Maligaya Branch</small>\n                </a>\n            </div>\n            <ng-template #elseBlock>\n                <a class=\"navbar-brand link-unstyled text-light brand-style mb-1\" routerLink=\"/dashboard\">\n                    <h5 class=\"mb-0 pb-0\">TILAH SEED CENTER</h5><br>\n                    <small>Maligaya Branch</small>\n                </a>\n            </ng-template>\n        </mdb-navbar-brand>\n        <links>\n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item\">\n                    <a routerLink=\"/dashboard\" class=\"nav-link link-unstyled text-light\" [hidden]=\"role\">Dashboard<span class=\"sr-only\">(current)</span></a>\n                </li>\n                <li class=\"nav-item active\">\n                    <a routerLink=\"/seed\" class=\"nav-link link-unstyled text-light\">Seed<span class=\"sr-only\">(current)</span></a>\n                </li>\n                <li class=\"nav-item\">\n                    <a routerLink=\"/user\" class=\"nav-link link-unstyled text-light\" [hidden]=\"role\">User</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a (click)=\"logoutModal(logout)\" class=\"nav-link link-unstyled text-light\">Logout</a>\n                </li> \n            </ul>\n        </links>\n    </mdb-navbar>\n    <div class=\"row m-0\">\n        <div class=\"col-10 offset-1 p-3 shadow mt-4\">\n        <div class=\"row pb-3\"> \n            <div class=\"col-lg-2 col-sm-12 d-flex justify-content-center\">\n            <button class=\"btn btn-outline-info btn-sm hvr-grow\" (click)=\"addSeedModal(addseed)\">Add New Seed\n                <span><i class=\"fa fa-plus\"></i></span>\n            </button>\n            </div>\n            <div class=\"col-lg-8 col-sm-12 d-flex justify-content-center\">\n            <h3 class=\"text-spacing text-uppercase hvr-float text-center\">Seed Collection</h3>\n            </div>\n            <div class=\"col-lg-2 col-sm-12 d-flex justify-content-center\">\n                <a routerLink=\"/logs\"><button class=\"btn btn-outline-info btn-sm hvr-grow\" [hidden]=\"role\">History\n                    <span><i class=\"fa fa-download\"></i></span>\n                </button></a>\n            </div>\n        </div>\n        <div class=\"table-sm-style table-responsive\">\n            <table mdbTable #tableEl=\"mdbTable\" class=\"table z-depth-1\" hover=\"true\">\n                <thead>\n                    <tr class=\"thead-light sticky-top\">\n                        <th *ngFor=\"let head of headElements; let i = index\" scope=\"col\">{{head}}</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let s of list; let i = index\">\n                        <th class=\"py-1\" *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\"\n                        scope=\"row\">{{s.name}}</th>\n                        <td class=\"py-1\" *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\">{{s.variety|titlecase}}</td>\n                        <td class=\"py-1\" *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\">{{s.classification|titlecase}}</td>\n                        <td class=\"py-1\" *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\">{{s.number_of_days}}</td>\n                        <td class=\"py-1\" *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\">{{s.stocks}}</td>\n                        <td class=\"py-1\" *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\">\n                            <button class=\"btn btn-outline-primary btn-sm mr-3 hvr-grow\" (click)=\"viewSeedModal(viewseed, s._id, i)\">View\n                            <!-- <span><i class=\"fa fa-edit\"></i></span> --></button>\n                            <button class=\"btn btn-outline-warning btn-sm mr-3 hvr-grow\" (click)=\"editSeedModal(editseed, s._id, i)\">Edit\n                            <span><i class=\"fa fa-edit\"></i></span></button>\n                            <button class=\"btn btn-outline-danger btn-sm hvr-buzz\" (click)=\"deleteModal(del, s._id)\">Delete\n                            <span><i class=\"fa fa-trash\"></i></span></button>   \n                        </td>\n                    </tr>\n                </tbody>\n\n                <tfoot class=\"grey lighten-5 w-100\">\n                    <tr>\n                        <td colspan=\"12\" class=\"p-0\">\n                            <mdb-table-pagination [tableEl]=\"tableEl\" [searchDataSource]=\"users\"></mdb-table-pagination>\n                        </td>\n                    </tr>\n                </tfoot>\n            </table>\n        </div>\n        </div>\n    </div>\n    <footer class=\"footer fixed-bottom\"></footer>\n</div>\n    \n<ng-template #viewseed let-modal>\n    <div class=\"modal-header bg-primary text-light\">\n        <h4 class=\"modal-title\">View Seed</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-4\">\n                <img src=\"\" alt=\"\" class=\"view-img-style\">\n            </div>\n            <div class=\"col-8\">\n                <table>\n                    <tr>\n                        <td colspan=\"2\"><h5 class=\"font-weight-bold\">{{seed.name}}</h5></td>\n                    </tr>\n                    <tr>\n                        <td>Variety</td>\n                        <td class=\"pl-3\">{{seed.variety|titlecase}}</td>\n                    </tr>\n                    <tr>\n                        <td>Classification</td>\n                        <td class=\"pl-3\">{{seed.classification|titlecase}}</td>\n                    </tr>\n                    <tr>\n                        <td>Description</td>\n                        <td class=\"pl-3\">{{seed.description}}</td>\n                    </tr>\n                    <tr>\n                        <td>Price</td>\n                        <td class=\"pl-3\">{{seed.price}}</td>\n                    </tr>\n                    <tr>\n                        <td>Days of Maturity</td>\n                        <td class=\"pl-3\">{{seed.number_of_days}}</td>\n                    </tr>\n                    <tr>\n                        <td>Stocks</td>\n                        <td class=\"pl-3\">{{seed.stocks}}</td>\n                    </tr>\n                </table>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #addseed let-modal>\n    <div class=\"modal-header bg-primary text-light\">\n    <h4 class=\"modal-title\">Add New Seed</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click'); myform.reset()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n    </div>\n    <div class=\"modal-body\">\n        <form [formGroup]=\"myform\">\n            <div class=\"form-group mb-1\">\n                <label for=\"seedName\">Seed Name</label>\n                <input type=\"text\" [ngClass]=\"{\n                    'border border-danger': seedname.invalid && (seedname.dirty || seedname.touched),\n                    'border border-success': seedname.valid && (seedname.dirty || seedname.touched)\n                }\" class=\"form-control\" id=\"seedName\" formControlName=\"seedname\" name=\"seedName\" [(ngModel)]=\"seedName\">\n                <div class=\"form-control-feedback\" *ngIf=\"seedname.errors && (seedname.dirty || seedname.touched)\">\n                    <small *ngIf=\"seedname.errors.required\" class=\"text-danger\">**Required</small>\n                </div>\n            </div>\n            <div class=\"form-row mb-1\">\n                <div class=\"form-group col-6 mb-1\">\n                    <label for=\"seedVariety\">Variety</label>\n                    <select id=\"seedVariety\" [ngClass]=\"{\n                        'border border-danger': seedVariety.invalid && (seedVariety.dirty || seedVariety.touched),\n                        'border border-success': seedVariety.valid && (seedVariety.dirty || seedVariety.touched)\n                    }\" class=\"form-control\" formControlName=\"seedVariety\" name=\"seed_variety\" [(ngModel)]=\"seed_variety\" required> \n                        <option selected=\"selected\" disabled>Choose...</option>\n                        <option *ngFor=\"let v of variety\" [ngValue]=\"v\">{{v|titlecase}}</option>\n                    </select>\n                    <div class=\"form-control-feedback\" *ngIf=\"seedVariety.errors && (seedVariety.dirty || seedVariety.touched)\">\n                        <small *ngIf=\"seedVariety.errors.required\" class=\"text-danger\">**Required</small>\n                    </div>\n                </div>\n                <div class=\"form-group col-6 mb-1\">\n                    <label for=\"seedClassification\">Classification</label>\n                    <select id=\"seedClassification\" [ngClass]=\"{\n                        'border border-danger': seedClassification.invalid && (seedClassification.dirty || seedClassification.touched),\n                        'border border-success': seedClassification.valid && (seedClassification.dirty || seedClassification.touched)\n                    }\" class=\"form-control\" formControlName=\"seedClassification\" name=\"seed_classification\" [(ngModel)]=\"seed_classification\" aria-required=\"\">\n                        <option selected=\"selected\" disabled>Choose...</option>\n                        <option *ngFor=\"let c of classification\" [ngValue]=\"c\">{{c|titlecase}}</option>\n                    </select>\n                    <div class=\"form-control-feedback\" *ngIf=\"seedClassification.errors && (seedClassification.dirty || seedClassification.touched)\">\n                        <small *ngIf=\"seedClassification.errors.required\" class=\"text-danger\">**Required</small>\n                    </div>\n                </div>\n            </div>\n            \n            <div class=\"form-group mb-1\">\n                <label for=\"seedDescription\">Description</label>\n                <input type=\"text\" [ngClass]=\"{\n                    'border border-danger': seedDescription.invalid && (seedDescription.dirty || seedDescription.touched),\n                    'border border-success': seedDescription.valid && (seedDescription.dirty || seedDescription.touched)\n                }\" class=\"form-control\" id=\"seedDescription\" formControlName=\"seedDescription\" name=\"description\" [(ngModel)]=\"description\" required>\n                <div class=\"form-control-feedback\" *ngIf=\"seedDescription.errors && (seedDescription.dirty || seedDescription.touched)\">\n                    <small *ngIf=\"seedDescription.errors.required\" class=\"text-danger\">**Required</small>\n                </div>\n            </div>\n            <div class=\"form-group mb-1\">\n                <label for=\"seedPrice\">Price</label>\n                <input type=\"text\" [ngClass]=\"{\n                    'border border-danger': seedPrice.invalid && (seedPrice.dirty || seedPrice.touched),\n                    'border border-success': seedPrice.valid && (seedPrice.dirty || seedPrice.touched)\n                }\" class=\"form-control\" id=\"seedPrice\" formControlName=\"seedPrice\" name=\"price\" [(ngModel)]=\"price\" required>\n                <div class=\"form-control-feedback\" *ngIf=\"seedPrice.errors && (seedPrice.dirty || seedPrice.touched)\">\n                    <small *ngIf=\"seedPrice.errors.required\" class=\"text-danger\">**Required</small>\n                </div>\n            </div>\n            <div class=\"form-row mb-1\">\n                <div class=\"form-group col-6 mb-1\">\n                    <label for=\"seedMaturity\">Days of Maturity</label>\n                    <input type=\"number\" [ngClass]=\"{\n                        'border border-danger': seedMaturity.invalid && (seedMaturity.dirty || seedMaturity.touched),\n                        'border border-success': seedMaturity.valid && (seedMaturity.dirty || seedMaturity.touched)\n                    }\" class=\"form-control\" id=\"seedMaturity\" formControlName=\"seedMaturity\" name=\"maturity\" [(ngModel)]=\"maturity\" required>\n                    <div class=\"form-control-feedback\" *ngIf=\"seedMaturity.errors && (seedMaturity.dirty || seedMaturity.touched)\">\n                        <small *ngIf=\"seedMaturity.errors.required\" class=\"text-danger\">**Required</small>\n                    </div>\n                </div>\n                <div class=\"form-group col-6 mb-1\">\n                    <label for=\"seedStocks\">Stocks</label>\n                    <input type=\"number\" [ngClass]=\"{\n                        'border border-danger': seedStocks.invalid && (seedStocks.dirty || seedStocks.touched),\n                        'border border-success': seedStocks.valid && (seedStocks.dirty || seedStocks.touched)\n                    }\" class=\"form-control\" id=\"seedStocks\" formControlName=\"seedStocks\" name=\"stock\" [(ngModel)]=\"stock\">\n                    <div class=\"form-control-feedback\" *ngIf=\"seedStocks.errors && (seedStocks.dirty || seedStocks.touched)\">\n                        <small *ngIf=\"seedStocks.errors.required\" class=\"text-danger\">**Required</small>\n                    </div>\n                </div>\n            </div>\n            <button [hidden]=\"!myform.valid\" type=\"submit\" class=\"btn btn-primary form-control hvr-grow\" (click)=\"addSeed(deletedModal)\">Add</button>\n        </form>\n    </div>\n</ng-template>\n\n<ng-template #editseed let-modal>\n    <div class=\"modal-header bg-warning text-light\">\n        <h4 class=\"modal-title\">Edit Seed</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <form [formGroup]=\"myform\">\n            <div class=\"form-group mb-1\">\n                <label for=\"seedName\">Seed Name</label>\n                <input type=\"text\" [ngClass]=\"{\n                    'border border-danger': seedname.invalid && (seedname.dirty || seedname.touched),\n                    'border border-success': seedname.valid && (seedname.dirty || seedname.touched)\n                }\" class=\"form-control\" id=\"seedName\" formControlName=\"seedname\" name=\"editName\" [(ngModel)]=\"editName\" value=\"editName\" required>\n                <div class=\"form-control-feedback\" *ngIf=\"seedname.errors && (seedname.dirty || seedname.touched)\">\n                    <small *ngIf=\"seedname.errors.required\" class=\"text-danger\">**Required</small>\n                </div>\n            </div>\n            <div class=\"form-row mb-1\">\n                <div class=\"form-group col-6 mb-1\">\n                    <label for=\"seedVariety\">Variety</label>\n                    <select id=\"seedVariety\" [ngClass]=\"{\n                        'border border-danger': seedVariety.invalid && (seedVariety.dirty || seedVariety.touched),\n                        'border border-success': seedVariety.valid && (seedVariety.dirty || seedVariety.touched)\n                    }\" class=\"form-control\" formControlName=\"seedVariety\" name=\"editVariety\" [(ngModel)]=\"editVariety\" required>\n                        <option selected=\"selected\" disabled>{{editVariety}}</option>\n                        <option *ngFor=\"let v of variety\" [ngValue]=\"v\">{{v|titlecase}}</option>\n                    </select>\n                    <div class=\"form-control-feedback\" *ngIf=\"seedVariety.errors && (seedVariety.dirty || seedVariety.touched)\">\n                        <small *ngIf=\"seedVariety.errors.required\" class=\"text-danger\">**Required</small>\n                    </div>\n                </div>\n                <div class=\"form-group col-6 mb-1\">\n                    <label for=\"seedClassification\">Classification</label>\n                    <select id=\"seedClassification\" [ngClass]=\"{\n                        'border border-danger': seedClassification.invalid && (seedClassification.dirty || seedClassification.touched),\n                        'border border-success': seedClassification.valid && (seedClassification.dirty || seedClassification.touched)\n                    }\" class=\"form-control\" formControlName=\"seedClassification\" name=\"editClassification\" [(ngModel)]=\"editClassification\" required>\n                        <option selected=\"selected\">{{editClassification}}</option>\n                        <option *ngFor=\"let c of classification\" [ngValue]=\"c\">{{c|titlecase}}</option>\n                    </select>\n                    <div class=\"form-control-feedback\" *ngIf=\"seedClassification.errors && (seedClassification.dirty || seedClassification.touched)\">\n                        <small *ngIf=\"seedClassification.errors.required\" class=\"text-danger\">**Required</small>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group mb-1\">\n                <label for=\"seedDescription\">Description</label>\n                <input type=\"text\" [ngClass]=\"{\n                    'border border-danger': seedDescription.invalid && (seedDescription.dirty || seedDescription.touched),\n                    'border border-success': seedDescription.valid && (seedDescription.dirty || seedDescription.touched)\n                }\" class=\"form-control\" id=\"seedDescription\" formControlName=\"seedDescription\" name=\"editDesc\" [(ngModel)]=\"editDesc\" value=\"editDesc\" required>\n                <div class=\"form-control-feedback\" *ngIf=\"seedDescription.errors && (seedDescription.dirty || seedDescription.touched)\">\n                    <small *ngIf=\"seedDescription.errors.required\" class=\"text-danger\">**Required</small>\n                </div>\n            </div>\n\n            <div class=\"form-group mb-1\">\n                <label for=\"seedPrice\">Price</label>\n                <input type=\"text\" [ngClass]=\"{\n                    'border border-danger': seedPrice.invalid && (seedPrice.dirty || seedPrice.touched),\n                    'border border-success': seedPrice.valid && (seedPrice.dirty || seedPrice.touched)\n                }\" class=\"form-control\" id=\"seedPrice\" formControlName=\"seedPrice\" name=\"editPrice\" [(ngModel)]=\"editPrice\" required>\n                <div class=\"form-control-feedback\" *ngIf=\"seedPrice.errors && (seedPrice.dirty || seedPrice.touched)\">\n                    <small *ngIf=\"seedPrice.errors.required\" class=\"text-danger\">**Required</small>\n                </div>\n            </div>\n\n            <div class=\"form-row mb-1\">\n                <div class=\"form-group col-6 mb-1\">\n                    <label for=\"seedMaturity\">Days of Maturity</label>\n                    <input type=\"text\" [ngClass]=\"{\n                        'border border-danger': seedMaturity.invalid && (seedMaturity.dirty || seedMaturity.touched),\n                        'border border-success': seedMaturity.valid && (seedMaturity.dirty || seedMaturity.touched)\n                    }\" class=\"form-control\" id=\"seedMaturity\" formControlName=\"seedMaturity\" name=\"editMaturity\" [(ngModel)]=\"editMaturity\" value=\"editMaturity\" required>\n                    <div class=\"form-control-feedback\" *ngIf=\"seedMaturity.errors && (seedMaturity.dirty || seedMaturity.touched)\">\n                        <small *ngIf=\"seedMaturity.errors.required\" class=\"text-danger\">**Required</small>\n                    </div>\n                 </div>\n                <div class=\"form-group col-6 mb-1\">\n                    <label for=\"seedStocks\">Stocks</label>\n                    <input type=\"text\" [ngClass]=\"{\n                        'border border-danger': seedStocks.invalid && (seedStocks.dirty || seedStocks.touched),\n                        'border border-success': seedStocks.valid && (seedStocks.dirty || seedStocks.touched)\n                    }\" class=\"form-control\" id=\"seedStocks\" formControlName=\"seedStocks\" name=\"editStock\" [(ngModel)]=\"editStock\" value=\"editStock\" required>\n                    <div class=\"form-control-feedback\" *ngIf=\"seedStocks.errors && (seedStocks.dirty || seedStocks.touched)\">\n                        <small *ngIf=\"seedStocks.errors.required\" class=\"text-danger\">**Required</small>\n                    </div>\n                </div>\n            </div>\n\n            <button [hidden]=\"!myform.valid\" type=\"submit\" class=\"btn btn-primary form-control hvr-grow\" (click)=\"editSeed(deletedModal)\">Save</button>\n        </form>\n    </div>\n</ng-template>\n\n<ng-template #del let-modal>\n    <div class=\"modal-header bg-danger text-light\">\n        <h5 class=\"modal-title\">Are you sure you want to delete this record?</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body d-flex justify-content-center\">\n        <button type=\"button\" (click)=\"deleteSeed(deletedModal)\" class=\"btn btn-danger hvr-buzz\">OK</button>\n        <button type=\"button\" (click)=\"modal.dismiss()\" class=\"btn btn-light\">Cancel</button>\n    </div>\n</ng-template>\n\n<ng-template #deletedModal let-modal>\n    <div class=\"modal-header bg-success py-4\">\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body d-flex justify-content-center py-3\" [ngSwitch]=\"action\">\n        <h5 class=\"modal-title\" *ngSwitchCase=\"'delete'\">Record successfully deleted!</h5>\n        <h5 class=\"modal-title\" *ngSwitchCase=\"'update'\">Record successfully Updated!</h5>\n        <h5 class=\"modal-title\" *ngSwitchCase=\"'add'\">Record successfully Added!</h5>\n        <h5 class=\"modal-title\" *ngSwitchCase=\"'exist'\">Seed Name Already Exists!</h5>\n    </div>\n</ng-template>\n<ng-template #logout let-modal>\n    <div class=\"modal-header bg-danger text-light\">\n        <h5 class=\"modal-title\">Are you sure you want to Logout?</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body d-flex justify-content-center\">\n        <button type=\"button\" (click)=\"clickLogout(modal.dismiss())\" class=\"btn btn-danger hvr-buzz\">YES</button>\n        <button type=\"button\" (click)=\"modal.dismiss()\" class=\"btn btn-light\">Cancel</button>\n    </div>\n  </ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>user works!</p> -->\n<div class=\"container-fluid p-0 m-0\">\n    <mdb-navbar SideClass=\"navbar navbar-1 navbar-light bg-red-style text-light lighten-2\" [containerInside]=\"false\">\n        <mdb-navbar-brand>\n            <a class=\"navbar-brand link-unstyled text-light brand-style mb-1\" routerLink=\"/dashboard\">\n                <h5 class=\"mb-0 pb-0\">TILAH SEED CENTER</h5><br>\n                <small>Maligaya Branch</small>\n            </a>\n            <!-- <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span class=\"navbar-toggler-icon bg-light\"></span>\n            </button> -->\n        </mdb-navbar-brand>\n        <links>\n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item\">\n                    <a routerLink=\"/dashboard\" class=\"nav-link link-unstyled text-light\" [hidden]=\"role\">Dashboard<span class=\"sr-only\">(current)</span></a>\n                </li>\n                <li class=\"nav-item\">\n                    <a routerLink=\"/seed\" class=\"nav-link link-unstyled text-light\">Seed<span class=\"sr-only\">(current)</span></a>\n                </li>\n                <li class=\"nav-item active\">\n                    <a routerLink=\"/user\" class=\"nav-link link-unstyled text-light\" [hidden]=\"role\">User</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a (click)=\"logoutModal(logout)\" class=\"nav-link link-unstyled text-light\">Logout</a>\n                </li> \n            </ul>\n            <!-- <ul class=\"navbar-nav\">\n                <li class=\"nav-item\">\n                    <a (click)=\"logoutModal(logout)\" class=\"nav-link link-unstyled text-light\">Logout</a>\n                </li>  \n            </ul> -->\n        </links>\n    </mdb-navbar>\n    <div class=\"row m-0\">\n        <div class=\"col-10 offset-1 p-3 shadow mt-4\">\n        <div class=\"row p-3\">\n            <div class=\"col-lg-2 col-sm-12 d-flex justify-content-center\">\n            <button class=\"btn btn-outline-info btn-sm hvr-grow\" (click)=\"addUserModal(adduser)\">Add New User\n                <span><i class=\"fa fa-plus\"></i></span>\n            </button>\n            </div>\n            <div class=\"col-lg-8 col-sm-12 d-flex justify-content-center\">\n                <h3 class=\"text-spacing text-uppercase hvr-float\">User List</h3>\n            </div>\n            <!-- <div class=\"col-2 d-flex justify-content-end\">\n                <button class=\"btn btn-outline-info btn-sm hvr-grow\">Generate Report\n                    <span><i class=\"fa fa-download\"></i></span>\n                </button>\n            </div> -->\n        </div>\n        <div class=\"table-responsive overflow-y table-style\">\n            <table mdbTable #tableEl=\"mdbTable\" class=\"table z-depth-1\" hover=\"true\">\n                    <col width=\"200\"> \n                    <col width=\"200\"> \n                    <col width=\"300\">\n                <thead>\n                    <tr class=\"thead-light sticky-top\">\n                        <th *ngFor=\"let head of headElements; let i = index\" scope=\"col\">{{head}}</th>\n                    </tr>\n                </thead>\n        \n                <tbody>\n                    <tr *ngFor=\"let s of list; let i = index\">\n                        <th class=\"py-2\" *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\"\n                        scope=\"row\">{{s.name}}</th>\n                        <td class=\"py-2\" *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\">{{s.username}}</td>\n                        <td class=\"py-2\" *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\">\n                            <button class=\"btn btn-outline-primary btn-sm mr-3 hvr-grow\" (click)=\"viewUserModal(viewuser, s._id, i)\">View\n                            <!-- <span><i class=\"fa fa-edit\"></i></span> --></button>\n                            <button class=\"btn btn-outline-warning btn-sm mr-3 hvr-grow\" (click)=\"editUserModal(edituser, s._id, i)\">Edit\n                            <span><i class=\"fa fa-edit\"></i></span></button>\n                            <button class=\"btn btn-outline-danger btn-sm hvr-buzz\" (click)=\"deleteModal(del, s._id)\">Delete\n                            <span><i class=\"fa fa-trash\"></i></span></button>   \n                        </td>\n                    </tr>\n                </tbody>\n\n                <tfoot class=\"grey lighten-5 w-100\">\n                    <tr>\n                        <td colspan=\"12\" class=\"py-0\">\n                            <mdb-table-pagination [tableEl]=\"tableEl\" [searchDataSource]=\"users\"></mdb-table-pagination>\n                        </td>\n                    </tr>\n                </tfoot>\n            </table>\n        </div>\n        </div>\n    </div>\n    <footer class=\"footer fixed-bottom\"></footer>\n</div>\n  \n<ng-template #viewuser let-modal>\n    <div class=\"modal-header bg-primary text-light\">\n        <h4 class=\"modal-title\">View User</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-4\">\n                <img src=\"\" alt=\"\" class=\"view-img-style\">\n            </div>\n            <div class=\"col-8\">\n                <table *ngFor=\"let u of user\">\n                    <tr>\n                        <td colspan=\"2\"><h5 class=\"font-weight-bold\">{{u.name}}</h5></td>\n                    </tr>\n                    <tr>\n                        <td>Role</td>\n                        <td class=\"pl-3\">{{u.role}}</td>\n                    </tr>\n                    <tr>\n                        <td>Username</td>\n                        <td class=\"pl-3\">{{u.username}}</td>\n                    </tr>\n                    <tr>\n                        <td>Password</td>\n                        <td class=\"pl-3\">{{u.password}}</td>\n                    </tr>\n                    <tr>\n                        <td colspan=\"2\">\n                            <button (click)=\"clickHistory(users[index]._id); modal.dismiss()\" class=\"btn btn-primary btn-sm form-control\">View History</button>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #adduser let-modal>\n    <div class=\"modal-header bg-primary text-light\">\n    <h4 class=\"modal-title\">Add New User</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click'); myform.reset()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n    </div>\n    <div class=\"modal-body\">\n        <form [formGroup]=\"myform\">\n            <div class=\"form-group\">\n                <label for=\"userFullName\">Full Name</label>\n                <input type=\"text\" [ngClass]=\"{\n                    'border border-danger': fullName.invalid && (fullName.dirty || fullName.touched),\n                    'border border-success': fullName.valid && (fullName.dirty || fullName.touched)\n                }\" class=\"form-control\" formControlName=\"fullName\" id=\"userFullName\" name=\"name\" [(ngModel)]=\"name\" required>\n                <div class=\"form-control-feedback\" *ngIf=\"fullName.errors && (fullName.dirty || fullName.touched)\">\n                    <small *ngIf=\"fullName.errors.required\" class=\"text-danger\">**Required</small>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"userRole\">Role</label>\n                <input type=\"text\" [ngClass]=\"{\n                    'border border-danger': userRole.invalid && (userRole.dirty || userRole.touched),\n                    'border border-success': userRole.valid && (userRole.dirty || userRole.touched)\n                }\" class=\"form-control\" id=\"userRole\" formControlName=\"userRole\" name=\"addRole\" [(ngModel)]=\"addRole\" required>\n                <div class=\"form-control-feedback\" *ngIf=\"userRole.errors && (userRole.dirty || userRole.touched)\">\n                    <small *ngIf=\"userRole.errors.required\" class=\"text-danger\">**Required</small>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"userName\">Username</label>\n                <input type=\"text\" [ngClass]=\"{\n                    'border border-danger': userName.invalid && (userName.dirty || userName.touched),\n                    'border border-success': userName.valid && (userName.dirty || userName.touched)\n                }\" class=\"form-control\" id=\"userName\" formControlName=\"userName\" name=\"username\" [(ngModel)]=\"username\" required>\n                <div class=\"form-control-feedback\" *ngIf=\"userName.errors && (userName.dirty || userName.touched)\">\n                    <small *ngIf=\"userName.errors.required\" class=\"text-danger\">**Required</small>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"userPassword\">Password</label>\n                <input type=\"password\" [ngClass]=\"{\n                    'border border-danger': userPassword.invalid && (userPassword.dirty || userPassword.touched),\n                    'border border-success': userPassword.valid && (userPassword.dirty || userPassword.touched)\n                }\" class=\"form-control\" id=\"userPassword\" formControlName=\"userPassword\" name=\"passWord\" [(ngModel)]=\"passWord\" required>\n                <div class=\"form-control-feedback\" *ngIf=\"userPassword.errors && (userPassword.dirty || userPassword.touched); else elseBlock\">\n                    <small *ngIf=\"userPassword.errors.required\" class=\"text-danger\">**Required</small>\n                </div>\n                <ng-template #elseBlock>\n                    <small class=\"text-info text-muted\">**Password must be atleast 6 characters and may contain letters, numbers and special characters e.g. .@#!&*-_/</small>\n                </ng-template>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"confirmPassword\">Confirm Password</label>\n                <input type=\"password\" [ngClass]=\"{\n                    'border border-danger': (confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched)) || (confirmPassword.touched && confirmPassword != passWord),\n                    'border border-success': confirmPassword.valid && (confirmPassword.dirty || confirmPassword.touched)\n                }\" class=\"form-control\" id=\"confirmPassword\" formControlName=\"confirmPassword\" name=\"confirmPassWord\" [(ngModel)]=\"confirmPassWord\" required>\n                <div class=\"form-control-feedback\" *ngIf=\"confirmPassword.errors && (confirmPassword.dirty || confirmPassword.touched)\">\n                    <small *ngIf=\"confirmPassword != passWord\" class=\"text-danger\">**Password did not match</small><br>\n                    <small *ngIf=\"confirmPassword.errors.required\" class=\"text-danger\">**Required</small>\n                </div>\n            </div>\n\n            <button [hidden]=\"!myform.valid\" type=\"submit\" class=\"btn btn-primary form-control hvr-grow\" (click)=\"addUser(deletedModal)\">Add</button>\n        </form>\n    </div>\n</ng-template>\n\n<ng-template #edituser let-modal>\n    <div class=\"modal-header bg-warning text-light\">\n        <h4 class=\"modal-title\">Edit User</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <form [formGroup]=\"myform\">\n            <div class=\"form-group\">\n                <label for=\"userFullName\">Full Name</label>\n                <input type=\"text\" [ngClass]=\"{\n                    'border border-danger': fullName.invalid && (fullName.dirty || fullName.touched),\n                    'border border-success': fullName.valid && (fullName.dirty || fullName.touched)\n                }\" class=\"form-control\" id=\"userFullName\"  formControlName=\"fullName\" name=\"editName\" [(ngModel)]=\"editName\" value=\"editName\" required>\n                <div class=\"form-control-feedback\" *ngIf=\"fullName.errors && (fullName.dirty || fullName.touched)\">\n                    <small *ngIf=\"fullName.errors.required\" class=\"text-danger\">**Required</small>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"userRole\">Role</label>\n                <input type=\"text\" [ngClass]=\"{\n                    'border border-danger': userRole.invalid && (userRole.dirty || userRole.touched),\n                    'border border-success': userRole.valid && (userRole.dirty || userRole.touched)\n                }\" class=\"form-control\" id=\"userRole\"  formControlName=\"userRole\" name=\"editRole\" [(ngModel)]=\"editRole\" value=\"editRole\" required>\n                <div class=\"form-control-feedback\" *ngIf=\"userRole.errors && (userRole.dirty || userRole.touched)\">\n                    <small *ngIf=\"userRole.errors.required\" class=\"text-danger\">**Required</small>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"userName\">Username</label>\n                <input type=\"text\" [ngClass]=\"{\n                    'border border-danger': userName.invalid && (userName.dirty || userName.touched),\n                    'border border-success': userName.valid && (userName.dirty || userName.touched)\n                }\" class=\"form-control\" id=\"userName\" formControlName=\"userName\" name=\"editUserName\" [(ngModel)]=\"editUserName\" value=\"editUserName\" required>\n                <div class=\"form-control-feedback\" *ngIf=\"userName.errors && (userName.dirty || userName.touched)\">\n                    <small *ngIf=\"userName.errors.required\" class=\"text-danger\">**Required</small>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"userPassword\">Password</label>\n                <input type=\"password\" [ngClass]=\"{\n                    'border border-danger': userPassword.invalid && (userPassword.dirty || userPassword.touched),\n                    'border border-success': userPassword.valid && (userPassword.dirty || userPassword.touched)\n                }\" class=\"form-control\" id=\"userPassword\" formControlName=\"userPassword\" name=\"editPassword\" [(ngModel)]=\"editPassword\" value=\"editPassword\" required>\n                <div class=\"form-control-feedback\" *ngIf=\"userPassword.errors && (userPassword.dirty || userPassword.touched); else elseBlock\">\n                    <small *ngIf=\"userPassword.errors.required\" class=\"text-danger\">**Required</small>\n                </div>\n                <ng-template #elseBlock>\n                    <small class=\"text-info text-muted\">**Password must be atleast 6 characters and may contain letters, numbers and special characters e.g. .@#!&*-_/</small>\n                </ng-template>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"confirmPassword\">Confirm Password</label>\n                <input type=\"password\" [ngClass]=\"{\n                    'border border-danger': (confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched)) || (editConfirmPassword.touched && editConfirmPassword != editPassword),\n                    'border border-success': confirmPassword.valid && (confirmPassword.dirty || confirmPassword.touched)\n                }\" class=\"form-control\" id=\"confirmPassword\" formControlName=\"confirmPassword\" name=\"editConfirmPassword\" [(ngModel)]=\"editConfirmPassword\" required>\n                <div class=\"form-control-feedback\" *ngIf=\"confirmPassword.errors && (confirmPassword.dirty || confirmPassword.touched)\">\n                    <small *ngIf=\"editConfirmPassword != editPassword\" class=\"text-danger\">**Password did not match</small><br>\n                    <small *ngIf=\"confirmPassword.errors.required\" class=\"text-danger\">**Required</small>\n                </div>\n            </div>\n\n            <button [hidden]=\"!myform.valid\" type=\"button\" class=\"btn btn-primary form-control hvr-grow\" (click)=\"editUser(deletedModal)\">Save</button>\n        </form>\n    </div>\n</ng-template>\n\n<ng-template #del let-modal>\n    <div class=\"modal-header bg-danger text-light\">\n        <h5 class=\"modal-title\">Are you sure you want to delete?</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body d-flex justify-content-center\">\n        <button type=\"button\" (click)=\"deleteUser(deletedModal)\" class=\"btn btn-danger hvr-buzz\">OK</button>\n    </div>\n</ng-template>\n\n<ng-template #deletedModal let-modal>\n    <div class=\"modal-header bg-success py-4\">\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body d-flex justify-content-center py-3\" [ngSwitch]=\"action\">\n        <h5 class=\"modal-title\" *ngSwitchCase=\"'delete'\">Record successfully deleted!</h5>\n        <h5 class=\"modal-title\" *ngSwitchCase=\"'update'\">Record successfully Updated!</h5>\n        <h5 class=\"modal-title\" *ngSwitchCase=\"'add'\">Record successfully Added!</h5>\n    </div>\n</ng-template>\n\n<ng-template #logout let-modal>\n    <div class=\"modal-header bg-danger text-light\">\n        <h5 class=\"modal-title\">Are you sure you want to Logout?</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body d-flex justify-content-center\">\n        <button type=\"button\" (click)=\"clickLogout(modal.dismiss())\" class=\"btn btn-danger hvr-buzz\">YES</button>\n        <button type=\"button\" (click)=\"modal.dismiss()\" class=\"btn btn-light\">Cancel</button>\n    </div>\n</ng-template>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _pos_pos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pos/pos.component */ "./src/app/pos/pos.component.ts");
            /* harmony import */ var _seed_seed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seed/seed.component */ "./src/app/seed/seed.component.ts");
            /* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
            /* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
            /* harmony import */ var _logs_logs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logs/logs.component */ "./src/app/logs/logs.component.ts");
            /* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
            /* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
            var routes = [
                {
                    path: '',
                    redirectTo: '/login',
                    pathMatch: 'full'
                },
                {
                    path: 'login',
                    component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
                },
                {
                    path: 'pointOfSale',
                    component: _pos_pos_component__WEBPACK_IMPORTED_MODULE_4__["PosComponent"]
                },
                {
                    path: 'seed',
                    component: _seed_seed_component__WEBPACK_IMPORTED_MODULE_5__["SeedComponent"]
                },
                {
                    path: 'user',
                    component: _user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
                    canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
                },
                {
                    path: 'dashboard',
                    component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                    canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
                },
                {
                    path: 'logs',
                    component: _logs_logs_component__WEBPACK_IMPORTED_MODULE_8__["LogsComponent"],
                    canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
                },
                {
                    path: 'logs/:id',
                    component: _logs_logs_component__WEBPACK_IMPORTED_MODULE_8__["LogsComponent"],
                    canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
                },
                {
                    path: '**',
                    component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"]
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'tilahSystem';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./token-interceptor.service */ "./src/app/token-interceptor.service.ts");
            /* harmony import */ var _pos_pos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pos/pos.component */ "./src/app/pos/pos.component.ts");
            /* harmony import */ var _seed_seed_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./seed/seed.component */ "./src/app/seed/seed.component.ts");
            /* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
            /* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
            /* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./history/history.component */ "./src/app/history/history.component.ts");
            /* harmony import */ var _logs_logs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./logs/logs.component */ "./src/app/logs/logs.component.ts");
            /* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
            /* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
            // import { NgxPaginationModule } from 'ngx-pagination';
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                        _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                        _pos_pos_component__WEBPACK_IMPORTED_MODULE_11__["PosComponent"],
                        _seed_seed_component__WEBPACK_IMPORTED_MODULE_12__["SeedComponent"],
                        _user_user_component__WEBPACK_IMPORTED_MODULE_13__["UserComponent"],
                        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
                        _history_history_component__WEBPACK_IMPORTED_MODULE_15__["HistoryComponent"],
                        _logs_logs_component__WEBPACK_IMPORTED_MODULE_16__["LogsComponent"],
                        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__["PageNotFoundComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"].forRoot(),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
                        // NgxPaginationModule
                    ],
                    providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"], _auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"], {
                            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                            useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["TokenInterceptorService"],
                            multi: true
                        }],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/auth.guard.ts": 
        /*!*******************************!*\
          !*** ./src/app/auth.guard.ts ***!
          \*******************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
            var AuthGuard = /** @class */ (function () {
                // canActivate(
                //   next: ActivatedRouteSnapshot,
                //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
                //   return true;
                // }
                // canActivateChild(
                //   next: ActivatedRouteSnapshot,
                //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
                //   return true;
                // }
                // canLoad(
                //   route: Route,
                //   segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
                //   return true;
                // }
                function AuthGuard(authService, userService, router) {
                    this.authService = authService;
                    this.userService = userService;
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function () {
                    if (this.authService.loggedIn()) {
                        return true;
                    }
                    else {
                        localStorage.removeItem('token');
                        localStorage.removeItem('userId');
                        this.router.navigate(['/login']);
                        return false;
                    }
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/auth.service.ts": 
        /*!*********************************!*\
          !*** ./src/app/auth.service.ts ***!
          \*********************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
            var AuthService = /** @class */ (function () {
                function AuthService(http, router, userService) {
                    this.http = http;
                    this.router = router;
                    this.userService = userService;
                    this.url = "https://tilah-system.herokuapp.com";
                }
                //private headers = new HttpHeaders().set('Content-Type', 'application/json');
                // addUser(user: User):Observable<any>{
                //   return this.http.post<any>(
                //     this.url + "/user",
                //     user
                //     //{headers: this.headers}
                //   );
                // }
                AuthService.prototype.logInUser = function (user) {
                    return this.http.post(this.url + "/user/login", user
                    // {headers: this.headers}
                    );
                };
                AuthService.prototype.loggedIn = function () {
                    var _this = this;
                    this.userService.currentUser = localStorage.getItem('userId');
                    this.userService.getUser(this.userService.currentUser).subscribe(function (data) {
                        _this.userRole = data[0].role;
                    });
                    if (this.userRole == "admin" && !!localStorage.getItem('token')) {
                        return true;
                    }
                    else {
                        return false;
                    }
                    // return !!localStorage.getItem('token');
                };
                AuthService.prototype.logOut = function () {
                    localStorage.removeItem('token');
                    localStorage.removeItem('userId');
                    this.router.navigate(['/login']);
                };
                AuthService.prototype.getToken = function () {
                    return localStorage.getItem('token');
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/dashboard/dashboard.component.scss": 
        /*!****************************************************!*\
          !*** ./src/app/dashboard/dashboard.component.scss ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".bg-header {\n  background-color: #d40000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcY2FtaWxcXERlc2t0b3BcXElUU0RGSU5BTFxcdGlsYWhTeXN0ZW0yL3NyY1xcYXBwXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEyLCAwLCAwKTtcclxufSIsIi5iZy1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDQwMDAwO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/dashboard/dashboard.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/dashboard/dashboard.component.ts ***!
          \**************************************************/
        /*! exports provided: DashboardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () { return DashboardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _sale_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sale.service */ "./src/app/sale.service.ts");
            /* harmony import */ var _seed_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../seed.service */ "./src/app/seed.service.ts");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            var DashboardComponent = /** @class */ (function () {
                function DashboardComponent(saleService, seedService, userService, authService, modalService, router) {
                    this.saleService = saleService;
                    this.seedService = seedService;
                    this.userService = userService;
                    this.authService = authService;
                    this.modalService = modalService;
                    this.router = router;
                    this.seedSale = [];
                    this.variety = ["inbred", "hybrid"];
                    this.classification = ["long", "round", "medium"];
                    this.category = ["Seed Name", "Seed Variety", "Seed Classification"];
                    this.chartDatasets = [
                        { data: [], label: 'Seed Sales' },
                        { data: [], label: 'Seed Sales' }
                    ];
                    this.chartColors = [
                        {
                            backgroundColor: 'rgba(105, 0, 132, .2)',
                            borderColor: 'rgba(200, 99, 132, .7)',
                            borderWidth: 2,
                        },
                        {
                            backgroundColor: 'rgba(0, 137, 132, .2)',
                            borderColor: 'rgba(0, 10, 130, .7)',
                            borderWidth: 2,
                        }
                    ];
                    this.date = Date();
                    //formNames
                    this.seedname = "";
                    this.seedname1 = "";
                    this.seedvariety = "";
                    this.seedvariety1 = "";
                    this.seedclass = "";
                    this.seedclass1 = "";
                    this.cat = "";
                    this.totalSales = 0;
                    this.totalCount = 0;
                    this.chartType = 'line';
                    this.chartOptions = {
                        responsive: true
                    };
                }
                DashboardComponent.prototype.chartClicked = function (e) { };
                DashboardComponent.prototype.chartHovered = function (e) { };
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.getSales();
                    this.dateNow = this.date.substring(4, 7);
                    this.seedService.getSeeds().subscribe(function (data) {
                        _this.seeds = data;
                    }, function (err) {
                        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpErrorResponse"]) {
                            if (err.status === 401) {
                                _this.router.navigate(['/login']);
                            }
                        }
                    });
                };
                DashboardComponent.prototype.getSales = function () {
                    var _this = this;
                    this.totalCount = 0;
                    this.saleService.getSales().subscribe(function (data) {
                        _this.sales = data;
                        _this.setChartLabels();
                        _this.setChartData();
                        for (var i = 0; i < _this.sales.length; i++) {
                            _this.totalSales += _this.sales[i].amount;
                            _this.totalCount++;
                        }
                        //this.getSeedSaleCount();
                    }, function (err) {
                        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpErrorResponse"]) {
                            if (err.status === 401) {
                                _this.router.navigate(['/login']);
                            }
                        }
                    });
                };
                // getSeedSaleCount(){
                //   this.seedSale = [];
                //   this.seedService.getSeeds().subscribe((data) => {
                //     this.seeds = data;
                //     for(var i=0; i<this.sales.length; i++){
                //       for(var j=0; j<this.seeds.length; j++){
                //         if(this.sales[i].itemId == this.seeds[j]._id){
                //           for(var k=0; k<this.seedSale.length; k++){
                //             if(this.seedSale[k].seedId == this.sales[i].itemId){
                //               var bool = true;
                //               var index = k;
                //             }
                //           }
                //           if(bool){
                //             this.seedSale[index].saleCount = this.seedSale[index].saleCount + 1;
                //           }
                //           else{
                //             var obj = {seedId: this.seeds[j]._id, saleCount: 1}
                //             this.seedSale.push(obj);
                //           }
                //         }
                //       }
                //     }
                //   });
                //   console.log(this.seedSale)
                // }
                DashboardComponent.prototype.setChartLabels = function () {
                    switch (this.dateNow) {
                        case "Jan":
                            this.chartLabels = ['September', 'October', 'November', 'December', 'January'];
                            this.ctr = ['09', '10', '11', '12', '01'];
                            break;
                        case "Feb":
                            this.chartLabels = ['October', 'November', 'December', 'January', 'February'];
                            this.ctr = ['10', '11', '12', '01', '02'];
                            break;
                        case "Mar":
                            this.chartLabels = ['November', 'December', 'January', 'February', 'March'];
                            this.ctr = ['11', '12', '01', '02', '03'];
                            break;
                        case "Apr":
                            this.chartLabels = ['December', 'January', 'February', 'March', 'April'];
                            this.ctr = ['12', '01', '02', '03', '04'];
                            break;
                        case "May":
                            this.chartLabels = ['January', 'February', 'March', 'April', 'May',];
                            this.ctr = ['01', '02', '03', '04', '05'];
                            break;
                        case "Jun":
                            this.chartLabels = ['February', 'March', 'April', 'May', 'June'];
                            this.ctr = ['02', '03', '04', '05', '06'];
                            break;
                        case "Jul":
                            this.chartLabels = ['March', 'April', 'May', 'June', 'July'];
                            this.ctr = ['03', '04', '05', '06', '07'];
                            break;
                        case "Aug":
                            this.chartLabels = ['April', 'May', 'June', 'July', 'August'];
                            this.ctr = ['04', '05', '06', '07', '08'];
                            break;
                        case "Sep":
                            this.chartLabels = ['May', 'June', 'July', 'August', 'September'];
                            this.ctr = ['05', '06', '07', '08', '09'];
                            break;
                        case "Oct":
                            this.chartLabels = ['June', 'July', 'August', 'September', 'October'];
                            this.ctr = ['06', '07', '08', '09', '10'];
                            break;
                        case "Nov":
                            this.chartLabels = ['July', 'August', 'September', 'October', 'November'];
                            this.ctr = ['07', '08', '09', '10', '11'];
                            break;
                        case "Dec":
                            this.chartLabels = ['August', 'September', 'October', 'November', 'December'];
                            this.ctr = ['08', '09', '10', '11', '12'];
                            break;
                        default: this.chartLabels = ['January', 'February', 'March', 'April', 'May'];
                    }
                };
                DashboardComponent.prototype.setChartData = function () {
                    this.chartDatasets = [
                        { data: [], label: 'Seed Sales' },
                        { data: [], label: 'Seed Sales' }
                    ];
                    var ctr = 0;
                    var ctr2 = 0;
                    var label, label2;
                    for (var i = 0; i < this.ctr.length; i++) {
                        ctr = 0;
                        ctr2 = 0;
                        for (var j = 0; j < this.sales.length; j++) {
                            if (this.cat == "") {
                                if (this.sales[j].dateNow == this.ctr[i]) {
                                    ctr++;
                                    label = "Seed Sales";
                                    label2 = "---";
                                }
                            }
                            else {
                                this.seedId = this.getSeedId();
                                if (this.cat == "Seed Name" && this.seedname1 == "") {
                                    if (this.sales[j].dateNow == this.ctr[i] && this.sales[j].itemId == this.seedId) {
                                        ctr++;
                                        label = this.seedname + " Sales";
                                        label2 = "---";
                                    }
                                }
                                else if (this.cat == "Seed Variety" && this.seedvariety1 == "") {
                                    for (var k = 0; k < this.seedId.length; k++) {
                                        if (this.sales[j].dateNow == this.ctr[i] && this.sales[j].itemId == this.seedId[k]) {
                                            ctr++;
                                            label = this.seedvariety + " Sales";
                                            label2 = "---";
                                        }
                                    }
                                }
                                else if (this.cat == "Seed Classification" && this.seedclass1 == "") {
                                    for (var k = 0; k < this.seedId.length; k++) {
                                        if (this.sales[j].dateNow == this.ctr[i] && this.sales[j].itemId == this.seedId[k]) {
                                            ctr++;
                                            label = this.seedclass + " Sales";
                                            label2 = "---";
                                        }
                                    }
                                }
                                else if (this.seedname1 != "") {
                                    this.seedId2 = this.getSeedId2();
                                    if (this.sales[j].dateNow == this.ctr[i] && this.sales[j].itemId == this.seedId) {
                                        ctr++;
                                        label = this.seedname + " Sales";
                                    }
                                    if (this.sales[j].dateNow == this.ctr[i] && this.sales[j].itemId == this.seedId2) {
                                        ctr2++;
                                        label2 = this.seedname1 + " Sales";
                                    }
                                }
                                else if (this.seedvariety1 != "" || this.seedclass1 != "") {
                                    this.seedId2 = this.getSeedId2();
                                    for (var k = 0; k < this.seedId.length; k++) {
                                        if (this.sales[j].dateNow == this.ctr[i] && this.sales[j].itemId == this.seedId[k]) {
                                            ctr++;
                                            label2 = "Seed Sales";
                                        }
                                    }
                                    for (var l = 0; l < this.seedId.length; l++) {
                                        if (this.sales[j].dateNow == this.ctr[i] && this.sales[j].itemId == this.seedId2[l]) {
                                            ctr2++;
                                            label2 = "Seed Sales";
                                        }
                                    }
                                }
                                else {
                                    if (this.sales[j].dateNow == this.ctr[i]) {
                                        ctr++;
                                        label = "Seed Sales";
                                    }
                                }
                            }
                        }
                        this.chartDatasets[0].data[i] = ctr;
                        this.chartDatasets[0].label = label;
                        this.chartDatasets[1].data[i] = ctr2;
                        this.chartDatasets[1].label = label2;
                    }
                    this.cat = "";
                    this.seedname = "";
                    this.seedname1 = "";
                    this.seedvariety = "";
                    this.seedvariety1 = "";
                    this.seedclass = "";
                    this.seedclass1 = "";
                };
                DashboardComponent.prototype.getSeedId = function () {
                    var x = 0;
                    if (this.cat == "Seed Name") {
                        for (var i = 0; i < this.seeds.length; i++) {
                            if (this.seedname == this.seeds[i].name) {
                                this.seedId = this.seeds[i]._id;
                            }
                        }
                    }
                    else if (this.cat == "Seed Variety") {
                        this.seedId = [];
                        for (var i = 0; i < this.seeds.length; i++) {
                            if (this.seedvariety == this.seeds[i].variety) {
                                this.seedId[x] = this.seeds[i]._id;
                                x++;
                            }
                        }
                    }
                    else if (this.cat == "Seed Classification") {
                        this.seedId = [];
                        for (var i = 0; i < this.seeds.length; i++) {
                            if (this.seedclass == this.seeds[i].classification) {
                                this.seedId[x] = this.seeds[i]._id;
                                x++;
                            }
                        }
                    }
                    return this.seedId;
                };
                DashboardComponent.prototype.getSeedId2 = function () {
                    var y = 0;
                    if (this.cat == "Seed Name") {
                        for (var i = 0; i < this.seeds.length; i++) {
                            if (this.seedname1 == this.seeds[i].name) {
                                this.seedId2 = this.seeds[i]._id;
                            }
                        }
                    }
                    else if (this.cat == "Seed Variety") {
                        this.seedId2 = [];
                        for (var i = 0; i < this.seeds.length; i++) {
                            if (this.seedvariety1 == this.seeds[i].variety) {
                                this.seedId2[y] = this.seeds[i]._id;
                                y++;
                            }
                        }
                    }
                    else if (this.cat == "Seed Classification") {
                        this.seedId2 = [];
                        for (var i = 0; i < this.seeds.length; i++) {
                            if (this.seedclass1 == this.seeds[i].classification) {
                                this.seedId2[y] = this.seeds[i]._id;
                                y++;
                            }
                        }
                    }
                    return this.seedId2;
                };
                DashboardComponent.prototype.logoutModal = function (logout) {
                    this.modalService.open(logout, { centered: true });
                };
                DashboardComponent.prototype.clickLogout = function () {
                    this.authService.logOut();
                };
                return DashboardComponent;
            }());
            DashboardComponent.ctorParameters = function () { return [
                { type: _sale_service__WEBPACK_IMPORTED_MODULE_2__["SaleService"] },
                { type: _seed_service__WEBPACK_IMPORTED_MODULE_3__["SeedService"] },
                { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
            DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dashboard',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")).default]
                })
            ], DashboardComponent);
            /***/ 
        }),
        /***/ "./src/app/history.service.ts": 
        /*!************************************!*\
          !*** ./src/app/history.service.ts ***!
          \************************************/
        /*! exports provided: HistoryService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryService", function () { return HistoryService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var HistoryService = /** @class */ (function () {
                function HistoryService(http) {
                    this.http = http;
                    this.userId = "";
                    this.url = "https://tilah-system.herokuapp.com";
                    this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
                }
                HistoryService.prototype.addHistory = function (histo) {
                    return this.http.post(this.url + "/log", histo, { headers: this.headers });
                };
                HistoryService.prototype.getHistory = function () {
                    return this.http.get(this.url + "/log");
                };
                HistoryService.prototype.getUserHistory = function (id) {
                    return this.http.get(this.url + "/log/" + id);
                };
                return HistoryService;
            }());
            HistoryService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            HistoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], HistoryService);
            /***/ 
        }),
        /***/ "./src/app/history.ts": 
        /*!****************************!*\
          !*** ./src/app/history.ts ***!
          \****************************/
        /*! exports provided: History */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "History", function () { return History; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var History = /** @class */ (function () {
                function History() {
                }
                return History;
            }());
            /***/ 
        }),
        /***/ "./src/app/history/history.component.scss": 
        /*!************************************************!*\
          !*** ./src/app/history/history.component.scss ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/history/history.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/history/history.component.ts ***!
          \**********************************************/
        /*! exports provided: HistoryComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function () { return HistoryComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HistoryComponent = /** @class */ (function () {
                function HistoryComponent() {
                }
                HistoryComponent.prototype.ngOnInit = function () {
                };
                return HistoryComponent;
            }());
            HistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-history',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./history.component.scss */ "./src/app/history/history.component.scss")).default]
                })
            ], HistoryComponent);
            /***/ 
        }),
        /***/ "./src/app/login/login.component.scss": 
        /*!********************************************!*\
          !*** ./src/app/login/login.component.scss ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
            /* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(userService, router, modalService, authService) {
                    this.userService = userService;
                    this.router = router;
                    this.modalService = modalService;
                    this.authService = authService;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    this.getUsers();
                    this.createFormControls();
                    this.createForm();
                };
                // ngAfterViewInit(){
                //   this.getUsers();
                // }
                LoginComponent.prototype.createFormControls = function () {
                    this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
                    this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
                };
                LoginComponent.prototype.createForm = function () {
                    this.myform = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                        username: this.username,
                        password: this.password
                    });
                };
                LoginComponent.prototype.getUsers = function () {
                    var _this = this;
                    this.userService.getUsers().subscribe(function (data) {
                        _this.users = data;
                    }, function (err) {
                        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpErrorResponse"]) {
                            if (err.status === 401) {
                                _this.router.navigate(['/login']);
                            }
                        }
                    });
                };
                LoginComponent.prototype.clickLogin = function (deletedModal) {
                    var _this = this;
                    var user = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]();
                    user.username = this.userName;
                    user.password = this.passWord;
                    this.authService.logInUser(user).subscribe(function (data) {
                        localStorage.setItem('token', data.token);
                        _this.user = data;
                        _this.userService.getUsers().subscribe(function (data) {
                            _this.users = data;
                            var logged = false;
                            var index;
                            for (var i = 0; i < _this.users.length; i++) {
                                if (_this.userName == _this.users[i].username && _this.passWord == _this.users[i].password) {
                                    logged = true;
                                    index = i;
                                }
                            }
                            if (logged && _this.users[index].role == "admin") {
                                localStorage.setItem("userId", _this.users[index]._id);
                                _this.userService.currentUser = localStorage.getItem('userId');
                                _this.deletedModal(deletedModal, "admin");
                            }
                            else if (logged && _this.users[index].role == "user") {
                                localStorage.setItem("userId", _this.users[index]._id);
                                _this.userService.currentUser = localStorage.getItem('userId');
                                _this.deletedModal(deletedModal, "user");
                            }
                            else {
                                _this.deletedModal(deletedModal, "invalid");
                            }
                        }, function (err) {
                            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpErrorResponse"]) {
                                if (err.status == 401) {
                                    _this.deletedModal(deletedModal, "invalid");
                                }
                            }
                        });
                    }, function (err) {
                        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpErrorResponse"]) {
                            if (err.status == 401) {
                                _this.deletedModal(deletedModal, "invalid");
                            }
                        }
                    });
                };
                LoginComponent.prototype.deletedModal = function (deletedModal, action) {
                    this.modalService.open(deletedModal, { centered: true });
                    this.action = action;
                };
                LoginComponent.prototype.clickOk = function (route) {
                    this.router.navigate(['/' + route]);
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"] },
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/logs/logs.component.scss": 
        /*!******************************************!*\
          !*** ./src/app/logs/logs.component.scss ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ3MvbG9ncy5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/logs/logs.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/logs/logs.component.ts ***!
          \****************************************/
        /*! exports provided: LogsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogsComponent", function () { return LogsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
            /* harmony import */ var _history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../history.service */ "./src/app/history.service.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            var LogsComponent = /** @class */ (function () {
                function LogsComponent(logService, authService, modalService, cdRef, router) {
                    this.logService = logService;
                    this.authService = authService;
                    this.modalService = modalService;
                    this.cdRef = cdRef;
                    this.router = router;
                    this.elements = [];
                    this.previous = [];
                    this.headElements = ['User', 'Seed', 'Action', 'Date'];
                }
                LogsComponent.prototype.ngOnInit = function () {
                    if (this.logService.userId == "") {
                        this.getLogs();
                    }
                    else {
                        this.getLog();
                    }
                };
                LogsComponent.prototype.ngAfterViewInit = function () {
                    this.mdbTablePagination.setMaxVisibleItemsNumberTo(4);
                    this.mdbTablePagination.calculateFirstItemIndex();
                    this.mdbTablePagination.calculateLastItemIndex();
                    this.cdRef.detectChanges();
                };
                LogsComponent.prototype.getLogs = function () {
                    var _this = this;
                    this.logService.getHistory().subscribe(function (data) {
                        _this.logs = data;
                        _this.mdbTable.setDataSource(_this.logs);
                        _this.logs = _this.mdbTable.getDataSource();
                        _this.previous = _this.mdbTable.getDataSource();
                        _this.mdbTablePagination.setMaxVisibleItemsNumberTo(4);
                        _this.mdbTablePagination.calculateFirstItemIndex();
                        _this.mdbTablePagination.calculateLastItemIndex();
                    }, function (err) {
                        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpErrorResponse"]) {
                            if (err.status === 401) {
                                _this.router.navigate(['/login']);
                            }
                        }
                    });
                };
                LogsComponent.prototype.getLog = function () {
                    var _this = this;
                    this.logService.getUserHistory(this.logService.userId).subscribe(function (data) {
                        console.log(data);
                        _this.logs = data;
                        _this.mdbTable.setDataSource(_this.logs);
                        _this.logs = _this.mdbTable.getDataSource();
                        _this.previous = _this.mdbTable.getDataSource();
                        _this.mdbTablePagination.setMaxVisibleItemsNumberTo(4);
                        _this.mdbTablePagination.calculateFirstItemIndex();
                        _this.mdbTablePagination.calculateLastItemIndex();
                    }, function (err) {
                        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpErrorResponse"]) {
                            if (err.status === 401) {
                                _this.router.navigate(['/login']);
                            }
                        }
                    });
                    this.logService.userId = "";
                };
                LogsComponent.prototype.logoutModal = function (logout) {
                    this.modalService.open(logout, { centered: true });
                };
                LogsComponent.prototype.clickLogout = function () {
                    this.authService.logOut();
                };
                return LogsComponent;
            }());
            LogsComponent.ctorParameters = function () { return [
                { type: _history_service__WEBPACK_IMPORTED_MODULE_3__["HistoryService"] },
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbTablePaginationComponent"], { static: true })
            ], LogsComponent.prototype, "mdbTablePagination", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbTableDirective"], { static: true })
            ], LogsComponent.prototype, "mdbTable", void 0);
            LogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-logs',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/logs/logs.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logs.component.scss */ "./src/app/logs/logs.component.scss")).default]
                })
            ], LogsComponent);
            /***/ 
        }),
        /***/ "./src/app/order.service.ts": 
        /*!**********************************!*\
          !*** ./src/app/order.service.ts ***!
          \**********************************/
        /*! exports provided: OrderService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function () { return OrderService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var OrderService = /** @class */ (function () {
                function OrderService() {
                    this.orders = [];
                    this.total = 0;
                }
                OrderService.prototype.setOrders = function (order) {
                    var res = false;
                    var index;
                    for (var i = 0; i < this.orders.length; i++) {
                        if (order.name == this.orders[i].name) {
                            res = true;
                            index = i;
                        }
                    }
                    if (res) {
                        var ctr = this.orders[index].quantity + 1;
                        var amt = this.orders[index].price * ctr;
                        this.orders[index] =
                            { "name": this.orders[index].name, "quantity": ctr, "price": this.orders[index].price, "amount": amt };
                        this.total += this.orders[index].price;
                    }
                    else {
                        var obj = { "name": order.name, "quantity": 1, "price": order.price, "amount": order.price };
                        this.orders.push(obj);
                        this.total += order.price;
                    }
                    return this.total;
                };
                OrderService.prototype.getOrders = function () {
                    return this.orders;
                };
                OrderService.prototype.getTotal = function () {
                    return this.total;
                };
                OrderService.prototype.clearOrders = function () {
                    this.orders = [];
                    this.total = 0;
                };
                return OrderService;
            }());
            OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], OrderService);
            /***/ 
        }),
        /***/ "./src/app/page-not-found/page-not-found.component.scss": 
        /*!**************************************************************!*\
          !*** ./src/app/page-not-found/page-not-found.component.scss ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/page-not-found/page-not-found.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/page-not-found/page-not-found.component.ts ***!
          \************************************************************/
        /*! exports provided: PageNotFoundComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () { return PageNotFoundComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PageNotFoundComponent = /** @class */ (function () {
                function PageNotFoundComponent() {
                }
                PageNotFoundComponent.prototype.ngOnInit = function () {
                };
                return PageNotFoundComponent;
            }());
            PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-page-not-found',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/page-not-found/page-not-found.component.scss")).default]
                })
            ], PageNotFoundComponent);
            /***/ 
        }),
        /***/ "./src/app/pos/pos.component.scss": 
        /*!****************************************!*\
          !*** ./src/app/pos/pos.component.scss ***!
          \****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".div-height {\n  height: 500px;\n}\n\n.h {\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zL0M6XFxVc2Vyc1xcY2FtaWxcXERlc2t0b3BcXElUU0RGSU5BTFxcdGlsYWhTeXN0ZW0yL3NyY1xcYXBwXFxwb3NcXHBvcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcG9zL3Bvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3Bvcy9wb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2LWhlaWdodHtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbn1cclxuLmh7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG59IiwiLmRpdi1oZWlnaHQge1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4uaCB7XG4gIGhlaWdodDogMzAwcHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/pos/pos.component.ts": 
        /*!**************************************!*\
          !*** ./src/app/pos/pos.component.ts ***!
          \**************************************/
        /*! exports provided: PosComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosComponent", function () { return PosComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _seed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../seed */ "./src/app/seed.ts");
            /* harmony import */ var _sale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sale */ "./src/app/sale.ts");
            /* harmony import */ var _seed_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../seed.service */ "./src/app/seed.service.ts");
            /* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order.service */ "./src/app/order.service.ts");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
            /* harmony import */ var _sale_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sale.service */ "./src/app/sale.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            var PosComponent = /** @class */ (function () {
                function PosComponent(itemService, orderService, userService, saleService, authService, modalService, router) {
                    this.itemService = itemService;
                    this.orderService = orderService;
                    this.userService = userService;
                    this.saleService = saleService;
                    this.authService = authService;
                    this.modalService = modalService;
                    this.router = router;
                    this.total = 0;
                    this.payment = 0;
                    this.change = 0;
                    this.date = Date();
                    this.headElements = ['Item Name', 'Price', 'Quantity', 'Amount'];
                }
                PosComponent.prototype.ngOnInit = function () {
                    this.getItems();
                    this.orders = this.orderService.getOrders();
                    this.getUser();
                    this.dateNow = this.date.substring(4, 7);
                    this.setDate();
                };
                PosComponent.prototype.getUser = function () {
                    var _this = this;
                    this.userService.getUser(this.userService.currentUser).subscribe(function (data) {
                        _this.user = data;
                    }, function (err) {
                        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpErrorResponse"]) {
                            if (err.status === 401) {
                                _this.router.navigate(['/login']);
                            }
                        }
                    });
                };
                PosComponent.prototype.getItems = function () {
                    var _this = this;
                    this.itemService.getSeeds().subscribe(function (data) {
                        _this.items = data;
                        _this.item = data;
                    }, function (err) {
                        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpErrorResponse"]) {
                            if (err.status === 401) {
                                _this.router.navigate(['/login']);
                            }
                        }
                    });
                };
                PosComponent.prototype.onClick = function (item) {
                    var x = false;
                    for (var i = 0; i < this.items.length; i++) {
                        if ((this.items[i]._id == item) && (this.items[i].stocks != 0)) {
                            this.obj =
                                { "name": this.items[i].name, "price": this.items[i].price };
                            x = true;
                        }
                    }
                    if (x) {
                        this.total = this.orderService.setOrders(this.obj);
                        x = false;
                    }
                    else {
                        alert("This Seed was out of Stock!");
                        x = false;
                    }
                };
                PosComponent.prototype.clickClear = function () {
                    this.orderService.clearOrders();
                    this.orders = this.orderService.getOrders();
                    this.total = this.orderService.getTotal();
                };
                PosComponent.prototype.payModal = function (pay) {
                    this.modalService.open(pay, { centered: true });
                };
                PosComponent.prototype.clickPay = function (id) {
                    var _this = this;
                    if (this.change >= 0) {
                        for (var j = 0; j < this.items.length; j++) {
                            for (var i = 0; i < this.orders.length; i++) {
                                if (this.items[j].name == this.orders[i].name) {
                                    //this.items[j].stocks = this.items[j].stocks - this.orders[i].quantity;
                                    var seed = new _seed__WEBPACK_IMPORTED_MODULE_2__["Seed"]();
                                    seed.name = this.items[j].name;
                                    seed.variety = this.items[j].variety;
                                    seed.classification = this.items[j].classification;
                                    seed.description = this.items[j].description;
                                    seed.stocks = this.items[j].stocks - this.orders[i].quantity;
                                    seed.number_of_days = this.items[j].number_of_days;
                                    seed.price = this.items[j].price;
                                    seed.updated_by = this.userService.currentUser;
                                    this.itemService.updateSeed(seed, this.items[j]._id).subscribe(function (data) {
                                        _this.getItems();
                                        _this.orders = _this.orderService.getOrders();
                                        _this.getUser();
                                    }, function (err) {
                                        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpErrorResponse"]) {
                                            if (err.status === 401) {
                                                _this.router.navigate(['/login']);
                                            }
                                        }
                                    });
                                    var sale = new _sale__WEBPACK_IMPORTED_MODULE_3__["Sale"]();
                                    sale.itemId = this.items[j]._id;
                                    sale.quantity = this.orders[i].quantity;
                                    sale.amount = this.orders[i].amount;
                                    sale.sold_by = id;
                                    sale.dateNow = this.dateNum;
                                    this.saleService.addSale(sale).subscribe(function (data) {
                                        _this.getItems();
                                        _this.orders = _this.orderService.getOrders();
                                        _this.getUser();
                                    });
                                }
                            }
                        }
                        this.orderService.clearOrders();
                        this.orders = this.orderService.getOrders();
                        this.total = this.orderService.getTotal();
                        this.payment = 0;
                        this.change = 0;
                    }
                };
                PosComponent.prototype.setDate = function () {
                    switch (this.dateNow) {
                        case "Jan":
                            this.dateNum = '01';
                            break;
                        case "Feb":
                            this.dateNum = '02';
                            break;
                        case "Mar":
                            this.dateNum = '03';
                            break;
                        case "Apr":
                            this.dateNum = '04';
                            break;
                        case "May":
                            this.dateNum = '05';
                            break;
                        case "Jun":
                            this.dateNum = '06';
                            break;
                        case "Jul":
                            this.dateNum = '07';
                            break;
                        case "Aug":
                            this.dateNum = '08';
                            break;
                        case "Sep":
                            this.dateNum = '09';
                            break;
                        case "Oct":
                            this.dateNum = '10';
                            break;
                        case "Nov":
                            this.dateNum = '11';
                            break;
                        case "Dec":
                            this.dateNum = '12';
                            break;
                        default:
                            this.dateNum = '00';
                    }
                };
                PosComponent.prototype.logoutModal = function (logout) {
                    this.modalService.open(logout, { centered: true });
                };
                PosComponent.prototype.clickLogout = function () {
                    this.authService.logOut();
                };
                return PosComponent;
            }());
            PosComponent.ctorParameters = function () { return [
                { type: _seed_service__WEBPACK_IMPORTED_MODULE_4__["SeedService"] },
                { type: _order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] },
                { type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
                { type: _sale_service__WEBPACK_IMPORTED_MODULE_7__["SaleService"] },
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
            ]; };
            PosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-pos',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pos/pos.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pos.component.scss */ "./src/app/pos/pos.component.scss")).default]
                })
            ], PosComponent);
            /***/ 
        }),
        /***/ "./src/app/sale.service.ts": 
        /*!*********************************!*\
          !*** ./src/app/sale.service.ts ***!
          \*********************************/
        /*! exports provided: SaleService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleService", function () { return SaleService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var SaleService = /** @class */ (function () {
                function SaleService(http) {
                    this.http = http;
                    this.url = "https://tilah-system.herokuapp.com";
                    this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
                }
                SaleService.prototype.getSales = function () {
                    return this.http.get(this.url + "/sale");
                };
                SaleService.prototype.getSale = function (id) {
                    return this.http.get(this.url + "/sale/" + id);
                };
                SaleService.prototype.addSale = function (sale) {
                    return this.http.post(this.url + "/sale", sale, { headers: this.headers });
                };
                SaleService.prototype.updateSale = function (sale, id) {
                    return this.http.put(this.url + "/sale/" + id, sale, { headers: this.headers });
                };
                SaleService.prototype.deleteSale = function (id) {
                    return this.http.delete(this.url + "/sale/" + id);
                };
                return SaleService;
            }());
            SaleService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            SaleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], SaleService);
            /***/ 
        }),
        /***/ "./src/app/sale.ts": 
        /*!*************************!*\
          !*** ./src/app/sale.ts ***!
          \*************************/
        /*! exports provided: Sale */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sale", function () { return Sale; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Sale = /** @class */ (function () {
                function Sale() {
                }
                return Sale;
            }());
            /***/ 
        }),
        /***/ "./src/app/seed.service.ts": 
        /*!*********************************!*\
          !*** ./src/app/seed.service.ts ***!
          \*********************************/
        /*! exports provided: SeedService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeedService", function () { return SeedService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var SeedService = /** @class */ (function () {
                function SeedService(http) {
                    this.http = http;
                    this.url = "https://tilah-system.herokuapp.com";
                    this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
                }
                SeedService.prototype.getSeeds = function () {
                    return this.http.get(this.url + "/seed");
                };
                SeedService.prototype.getSeed = function (id) {
                    return this.http.get(this.url + "/seed/" + id);
                };
                SeedService.prototype.addSeed = function (seed) {
                    return this.http.post(this.url + "/seed", seed, { headers: this.headers });
                };
                SeedService.prototype.updateSeed = function (seed, id) {
                    return this.http.put(this.url + "/seed/" + id, seed, { headers: this.headers });
                };
                SeedService.prototype.deleteSeed = function (id) {
                    return this.http.delete(this.url + "/seed/" + id);
                };
                return SeedService;
            }());
            SeedService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            SeedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], SeedService);
            /***/ 
        }),
        /***/ "./src/app/seed.ts": 
        /*!*************************!*\
          !*** ./src/app/seed.ts ***!
          \*************************/
        /*! exports provided: Seed */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Seed", function () { return Seed; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Seed = /** @class */ (function () {
                function Seed() {
                }
                return Seed;
            }());
            /***/ 
        }),
        /***/ "./src/app/seed/seed.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/seed/seed.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlZWQvc2VlZC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/seed/seed.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/seed/seed.component.ts ***!
          \****************************************/
        /*! exports provided: SeedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeedComponent", function () { return SeedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
            /* harmony import */ var _seed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../seed */ "./src/app/seed.ts");
            /* harmony import */ var _seed_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../seed.service */ "./src/app/seed.service.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../history */ "./src/app/history.ts");
            /* harmony import */ var _history_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../history.service */ "./src/app/history.service.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
            var SeedComponent = /** @class */ (function () {
                function SeedComponent(seedService, userService, modalService, router, cdRef, historyService, authService) {
                    this.seedService = seedService;
                    this.userService = userService;
                    this.modalService = modalService;
                    this.router = router;
                    this.cdRef = cdRef;
                    this.historyService = historyService;
                    this.authService = authService;
                    this.elements = [];
                    this.previous = [];
                    this.headElements = ['Name', 'Variety', 'Classification', 'Days of Maturity', 'Stocks', ''];
                    this.variety = ["inbred", "hybrid"];
                    this.classification = ["long", "round", "medium"];
                    this.role = true;
                }
                SeedComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.getSeeds();
                    this.createFormControls();
                    this.createForm();
                    this.userService.getUser(this.userService.currentUser).subscribe(function (data) {
                        _this.user = data;
                        if (_this.user[0].role == "admin") {
                            _this.role = false;
                        }
                    }, function (err) {
                        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpErrorResponse"]) {
                            if (err.status === 401) {
                                _this.router.navigate(['/login']);
                            }
                        }
                    });
                };
                SeedComponent.prototype.ngAfterViewInit = function () {
                    this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);
                    this.mdbTablePagination.calculateFirstItemIndex();
                    this.mdbTablePagination.calculateLastItemIndex();
                    this.cdRef.detectChanges();
                };
                SeedComponent.prototype.getSeeds = function () {
                    var _this = this;
                    this.seedService.getSeeds().subscribe(function (data) {
                        _this.seeds = data;
                        _this.list = data;
                        _this.mdbTable.setDataSource(_this.seeds);
                        _this.seeds = _this.mdbTable.getDataSource();
                        _this.previous = _this.mdbTable.getDataSource();
                        _this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);
                        _this.mdbTablePagination.calculateFirstItemIndex();
                        _this.mdbTablePagination.calculateLastItemIndex();
                    }, function (err) {
                        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpErrorResponse"]) {
                            if (err.status === 401) {
                                _this.router.navigate(['/login']);
                            }
                        }
                    });
                };
                SeedComponent.prototype.createFormControls = function () {
                    this.seedname = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[A-Za-z0-9\s-]*")]);
                    this.seedVariety = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
                    this.seedClassification = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
                    this.seedDescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[^@#$*<>~`{}+=]*")]);
                    this.seedPrice = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[0-9.]*")]);
                    this.seedMaturity = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[0-9]*")]);
                    this.seedStocks = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[0-9]*")]);
                };
                SeedComponent.prototype.createForm = function () {
                    this.myform = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        seedname: this.seedname,
                        seedVariety: this.seedVariety,
                        seedClassification: this.seedClassification,
                        seedDescription: this.seedDescription,
                        seedPrice: this.seedPrice,
                        seedMaturity: this.seedMaturity,
                        seedStocks: this.seedStocks
                    });
                };
                SeedComponent.prototype.addSeed = function (deletedModal) {
                    var _this = this;
                    var bool = true;
                    for (var i = 0; i < this.seeds.length; i++) {
                        if (this.seeds[i].name == this.seedName) {
                            bool = false;
                        }
                    }
                    if (bool) {
                        var seed = new _seed__WEBPACK_IMPORTED_MODULE_4__["Seed"]();
                        seed.name = this.seedName;
                        seed.variety = this.seed_variety;
                        seed.classification = this.seed_classification;
                        seed.description = this.description;
                        seed.price = this.price;
                        seed.number_of_days = this.maturity;
                        seed.stocks = this.stock;
                        seed.updated_by = this.userService.currentUser;
                        this.seedService.addSeed(seed).subscribe(function (data) {
                            _this.getSeeds();
                            _this.addHistory(seed.name, "Added");
                        }, function (err) {
                            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpErrorResponse"]) {
                                if (err.status === 401) {
                                    _this.router.navigate(['/login']);
                                }
                            }
                        });
                        this.myform.reset();
                        this.modalService.dismissAll();
                        this.deletedModal(deletedModal, "add");
                    }
                    else {
                        this.deletedModal(deletedModal, "exist");
                    }
                };
                SeedComponent.prototype.editSeed = function (deletedModal) {
                    var _this = this;
                    var bool = true;
                    for (var i = 0; i < this.seeds.length; i++) {
                        if (this.seeds[i].name == this.seedName) {
                            bool = false;
                        }
                    }
                    if (bool) {
                        var seed = new _seed__WEBPACK_IMPORTED_MODULE_4__["Seed"]();
                        seed.name = this.editName;
                        seed.variety = this.editVariety;
                        seed.classification = this.editClassification;
                        seed.description = this.editDesc;
                        seed.price = this.editPrice;
                        seed.number_of_days = this.editMaturity;
                        seed.stocks = this.editStock;
                        seed.updated_by = this.userService.currentUser;
                        this.seedService.updateSeed(seed, this.id).subscribe(function (data) {
                            _this.getSeeds();
                            _this.addHistory(seed.name, "Updated");
                        }, function (err) {
                            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpErrorResponse"]) {
                                if (err.status === 401) {
                                    _this.router.navigate(['/login']);
                                }
                            }
                        });
                        this.myform.reset();
                        this.modalService.dismissAll();
                        this.deletedModal(deletedModal, "update");
                    }
                    else {
                        this.deletedModal(deletedModal, "exist");
                    }
                };
                SeedComponent.prototype.deleteSeed = function (deletedModal) {
                    var _this = this;
                    var seedname;
                    for (var i = 0; i < this.seeds.length; i++) {
                        if (this.id == this.seeds[i]._id) {
                            seedname = this.seeds[i].name;
                        }
                    }
                    var histo = new _history__WEBPACK_IMPORTED_MODULE_9__["History"]();
                    histo.seed = seedname;
                    histo.userID = this.user[0]._id;
                    histo.user = this.user[0].name;
                    histo.action = "Deleted";
                    this.historyService.addHistory(histo).subscribe(function (data) {
                    }, function (err) {
                        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpErrorResponse"]) {
                            if (err.status === 401) {
                                _this.router.navigate(['/login']);
                            }
                        }
                    });
                    this.seedService.deleteSeed(this.id).subscribe(function (data) {
                        _this.getSeeds();
                    }, function (err) {
                        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpErrorResponse"]) {
                            if (err.status === 401) {
                                _this.router.navigate(['/login']);
                            }
                        }
                    });
                    this.modalService.dismissAll();
                    this.deletedModal(deletedModal, "delete");
                };
                SeedComponent.prototype.viewSeedModal = function (viewseed, id, index) {
                    var _this = this;
                    this.id = id;
                    this.index = index;
                    this.seedService.getSeed(id).subscribe(function (data) {
                        _this.seed = data;
                        _this, _this.getSeeds();
                    });
                    this.modalService.open(viewseed, { centered: true });
                };
                SeedComponent.prototype.addSeedModal = function (addseed, name, username) {
                    this.modalService.open(addseed, { centered: true });
                    this.name = name;
                    this.username = username;
                };
                SeedComponent.prototype.editSeedModal = function (editseed, id, index) {
                    var _this = this;
                    this.id = id;
                    this.seedService.getSeed(id).subscribe(function (data) {
                        _this.seeds = data;
                        _this.getSeeds();
                    }, function (err) {
                        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpErrorResponse"]) {
                            if (err.status === 401) {
                                _this.router.navigate(['/login']);
                            }
                        }
                    });
                    this.editName = this.seeds[index].name;
                    this.editVariety = this.seeds[index].variety;
                    this.editClassification = this.seeds[index].classification;
                    this.editDesc = this.seeds[index].description;
                    this.editMaturity = this.seeds[index].number_of_days;
                    this.editStock = this.seeds[index].stocks;
                    this.editPrice = this.seeds[index].price;
                    this.modalService.open(editseed, { centered: true });
                };
                SeedComponent.prototype.deleteModal = function (del, id) {
                    this.id = id;
                    this.modalService.open(del, { centered: true });
                };
                SeedComponent.prototype.deletedModal = function (deletedModal, action) {
                    this.modalService.open(deletedModal, { centered: true });
                    this.action = action;
                };
                SeedComponent.prototype.logoutModal = function (logout) {
                    this.modalService.open(logout, { centered: true });
                };
                SeedComponent.prototype.clickLogout = function () {
                    this.authService.logOut();
                };
                SeedComponent.prototype.addHistory = function (seedname, action) {
                    var _this = this;
                    var histo = new _history__WEBPACK_IMPORTED_MODULE_9__["History"]();
                    histo.seed = seedname;
                    histo.userID = this.user[0]._id;
                    histo.user = this.user[0].name;
                    histo.action = action;
                    this.historyService.addHistory(histo).subscribe(function (data) {
                        _this.getSeeds();
                    }, function (err) {
                        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpErrorResponse"]) {
                            if (err.status === 401) {
                                _this.router.navigate(['/login']);
                            }
                        }
                    });
                };
                return SeedComponent;
            }());
            SeedComponent.ctorParameters = function () { return [
                { type: _seed_service__WEBPACK_IMPORTED_MODULE_5__["SeedService"] },
                { type: _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _history_service__WEBPACK_IMPORTED_MODULE_10__["HistoryService"] },
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbTablePaginationComponent"], { static: true })
            ], SeedComponent.prototype, "mdbTablePagination", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbTableDirective"], { static: true })
            ], SeedComponent.prototype, "mdbTable", void 0);
            SeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-seed',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./seed.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/seed/seed.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./seed.component.css */ "./src/app/seed/seed.component.css")).default]
                })
            ], SeedComponent);
            /***/ 
        }),
        /***/ "./src/app/token-interceptor.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/token-interceptor.service.ts ***!
          \**********************************************/
        /*! exports provided: TokenInterceptorService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function () { return TokenInterceptorService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
            var TokenInterceptorService = /** @class */ (function () {
                function TokenInterceptorService(injector) {
                    this.injector = injector;
                }
                TokenInterceptorService.prototype.intercept = function (req, next) {
                    var authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]);
                    var tokenizedReq = req.clone({
                        setHeaders: {
                            Authorization: "Bearer " + authService.getToken()
                        }
                    });
                    return next.handle(tokenizedReq);
                };
                return TokenInterceptorService;
            }());
            TokenInterceptorService.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
            ]; };
            TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], TokenInterceptorService);
            /***/ 
        }),
        /***/ "./src/app/user.service.ts": 
        /*!*********************************!*\
          !*** ./src/app/user.service.ts ***!
          \*********************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var UserService = /** @class */ (function () {
                function UserService(http) {
                    this.http = http;
                    this.url = "https://tilah-system.herokuapp.com";
                    this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
                }
                UserService.prototype.getUsers = function () {
                    return this.http.get(this.url + "/user");
                };
                UserService.prototype.getUser = function (id) {
                    return this.http.get(this.url + "/user/" + id);
                };
                UserService.prototype.addUser = function (user) {
                    return this.http.post(this.url + "/user", user, { headers: this.headers });
                };
                UserService.prototype.updateUser = function (user, id) {
                    return this.http.put(this.url + "/user/" + id, user, { headers: this.headers });
                };
                UserService.prototype.deleteUser = function (id) {
                    return this.http.delete(this.url + "/user/" + id);
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], UserService);
            /***/ 
        }),
        /***/ "./src/app/user.ts": 
        /*!*************************!*\
          !*** ./src/app/user.ts ***!
          \*************************/
        /*! exports provided: User */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function () { return User; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var User = /** @class */ (function () {
                function User() {
                }
                return User;
            }());
            /***/ 
        }),
        /***/ "./src/app/user/user.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/user/user.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/user/user.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/user/user.component.ts ***!
          \****************************************/
        /*! exports provided: UserComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function () { return UserComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
            /* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _history_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../history.service */ "./src/app/history.service.ts");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var UserComponent = /** @class */ (function () {
                function UserComponent(userService, modalService, router, cdRef, logService, authService) {
                    this.userService = userService;
                    this.modalService = modalService;
                    this.router = router;
                    this.cdRef = cdRef;
                    this.logService = logService;
                    this.authService = authService;
                    this.elements = [];
                    this.previous = [];
                    this.headElements = ['Name', 'Username', ''];
                }
                UserComponent.prototype.ngOnInit = function () {
                    this.getUsers();
                    this.createFormControls();
                    this.createForm();
                };
                UserComponent.prototype.ngAfterViewInit = function () {
                    this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);
                    this.mdbTablePagination.calculateFirstItemIndex();
                    this.mdbTablePagination.calculateLastItemIndex();
                    this.cdRef.detectChanges();
                };
                UserComponent.prototype.getUsers = function () {
                    var _this = this;
                    this.userService.getUsers().subscribe(function (data) {
                        _this.users = data;
                        _this.list = data;
                        _this.mdbTable.setDataSource(_this.list);
                        _this.list = _this.mdbTable.getDataSource();
                        _this.previous = _this.mdbTable.getDataSource();
                        _this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);
                        _this.mdbTablePagination.calculateFirstItemIndex();
                        _this.mdbTablePagination.calculateLastItemIndex();
                    }, function (err) {
                        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpErrorResponse"]) {
                            if (err.status === 401) {
                                _this.router.navigate(['/login']);
                            }
                        }
                    });
                };
                UserComponent.prototype.createFormControls = function () {
                    this.fullName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[^!@#$~%^*()?/{}|\]*")]);
                    this.userName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[A-Za-z0-9\s.@#!&*-_/]*")]);
                    this.userRole = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[A-Za-z]*")]);
                    this.userPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[A-Za-z0-9.@#!&*-_/]*"), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]);
                    this.confirmPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[A-Za-z0-9.@#!&*-_/]*"), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]);
                };
                UserComponent.prototype.createForm = function () {
                    this.myform = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        fullName: this.fullName,
                        userName: this.userName,
                        userRole: this.userRole,
                        userPassword: this.userPassword,
                        confirmPassword: this.confirmPassword
                    });
                };
                UserComponent.prototype.addUser = function (deletedModal) {
                    var _this = this;
                    var i;
                    var ctr = true;
                    for (i = 0; i < this.users.length; i++) {
                        if (this.users[i].username == this.username) {
                            ctr = false;
                        }
                    }
                    if (ctr) {
                        var user = new _user__WEBPACK_IMPORTED_MODULE_6__["User"]();
                        user.name = this.name;
                        user.username = this.username;
                        user.role = this.addRole;
                        user.password = this.passWord;
                        this.userService.addUser(user).subscribe(function (data) {
                            _this.getUsers();
                            alert('added');
                        });
                    }
                    else {
                        alert("Username already Exists!");
                    }
                    this.myform.reset();
                    this.modalService.dismissAll();
                    this.deletedModal(deletedModal, "add");
                };
                UserComponent.prototype.editUser = function (deletedModal) {
                    var _this = this;
                    var user = new _user__WEBPACK_IMPORTED_MODULE_6__["User"]();
                    user.name = this.editName;
                    user.username = this.editUserName;
                    user.role = this.editRole;
                    user.password = this.editPassword;
                    this.userService.updateUser(user, this.id).subscribe(function (data) {
                        _this.getUsers();
                    }, function (err) {
                        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpErrorResponse"]) {
                            if (err.status === 401) {
                                _this.router.navigate(['/login']);
                            }
                        }
                    });
                    this.myform.reset();
                    this.modalService.dismissAll();
                    this.deletedModal(deletedModal, "update");
                };
                UserComponent.prototype.deleteUser = function (deletedModal) {
                    var _this = this;
                    this.userService.deleteUser(this.id).subscribe(function (data) {
                        _this.getUsers();
                    }, function (err) {
                        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpErrorResponse"]) {
                            if (err.status === 401) {
                                _this.router.navigate(['/login']);
                            }
                        }
                    });
                    this.modalService.dismissAll();
                    this.deletedModal(deletedModal, "delete");
                };
                UserComponent.prototype.viewUserModal = function (viewuser, id, index) {
                    var _this = this;
                    this.id = id;
                    this.index = index;
                    this.userService.getUser(id).subscribe(function (data) {
                        _this.user = data;
                        _this.getUsers();
                    }, function (err) {
                        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpErrorResponse"]) {
                            if (err.status === 401) {
                                _this.router.navigate(['/login']);
                            }
                        }
                    });
                    this.modalService.open(viewuser, { centered: true });
                };
                UserComponent.prototype.addUserModal = function (adduser) {
                    this.modalService.open(adduser, { centered: true });
                };
                UserComponent.prototype.editUserModal = function (edituser, id, index) {
                    var _this = this;
                    this.id = id;
                    this.userService.getUser(id).subscribe(function (data) {
                        _this.user = data;
                        _this.getUsers();
                        for (var i = 0; i < _this.user.length; i++) {
                            _this.editName = _this.user[i].name;
                            _this.editUserName = _this.user[i].username;
                            _this.editRole = _this.user[i].role;
                            _this.editPassword = _this.user[i].password;
                            _this.editConfirmPassword = "";
                        }
                    }, function (err) {
                        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpErrorResponse"]) {
                            if (err.status === 401) {
                                _this.router.navigate(['/login']);
                            }
                        }
                    });
                    this.modalService.open(edituser, { centered: true });
                };
                UserComponent.prototype.deleteModal = function (del, id) {
                    this.id = id;
                    this.modalService.open(del, { centered: true });
                };
                UserComponent.prototype.deletedModal = function (deletedModal, action) {
                    this.modalService.open(deletedModal, { centered: true });
                    this.action = action;
                };
                UserComponent.prototype.logoutModal = function (logout) {
                    this.modalService.open(logout, { centered: true });
                };
                UserComponent.prototype.clickLogout = function () {
                    this.authService.logOut();
                };
                UserComponent.prototype.clickHistory = function (id) {
                    this.logService.userId = id;
                    this.router.navigate(['/logs']);
                };
                return UserComponent;
            }());
            UserComponent.ctorParameters = function () { return [
                { type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _history_service__WEBPACK_IMPORTED_MODULE_8__["HistoryService"] },
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbTablePaginationComponent"], { static: true })
            ], UserComponent.prototype, "mdbTablePagination", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbTableDirective"], { static: true })
            ], UserComponent.prototype, "mdbTable", void 0);
            UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")).default]
                })
            ], UserComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\camil\Desktop\ITSDFINAL\tilahSystem2\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map