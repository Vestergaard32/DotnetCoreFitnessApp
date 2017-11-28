webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{title}}!\r\n  </h1>\r\n</div>\r\n\r\n<app-login></app-login>\r\n<app-workout></app-workout>\r\n<app-allworkouts></app-allworkouts>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.title = 'Angular Fitness App';
        this.apiValues = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        // this._httpService.get('/api/derp').subscribe(values => {
        //   this.apiValues = values.json() as string[];
        // });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_interceptor__ = __webpack_require__("../../../../../src/app/auth-interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_module__ = __webpack_require__("../../../../../src/app/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__workout_workout_module__ = __webpack_require__("../../../../../src/app/workout/workout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fitness_api_service__ = __webpack_require__("../../../../../src/app/fitness-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__login_login_module__["a" /* LoginModule */],
            __WEBPACK_IMPORTED_MODULE_6__workout_workout_module__["a" /* WorkoutModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__fitness_api_service__["a" /* FitnessApiService */],
            __WEBPACK_IMPORTED_MODULE_9__login_login_service__["a" /* LoginService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                useClass: __WEBPACK_IMPORTED_MODULE_4__auth_interceptor__["a" /* AuthInterceptor */],
                multi: true
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthInterceptor = (function () {
    function AuthInterceptor(inj) {
        this.inj = inj;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authHeader = 'Bearer ' + this.inj.get(__WEBPACK_IMPORTED_MODULE_1__login_login_service__["a" /* LoginService */]).getToken();
        var authReq = req.clone({ setHeaders: { Authorization: authHeader } });
        return next.handle(authReq);
    };
    return AuthInterceptor;
}());
AuthInterceptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */]) === "function" && _a || Object])
], AuthInterceptor);

var _a;
//# sourceMappingURL=auth-interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/exercise.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Exercise; });
var Exercise = (function () {
    function Exercise() {
    }
    return Exercise;
}());

//# sourceMappingURL=exercise.js.map

/***/ }),

/***/ "../../../../../src/app/fitness-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FitnessApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FitnessApiService = (function () {
    function FitnessApiService(http, loginService) {
        this.http = http;
        this.loginService = loginService;
        //private baseUrl = 'https://webassignment4.herokuapp.com/';
        this.baseUrl = 'http://localhost:5000/';
        this.loggedInUser = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](null);
    }
    FitnessApiService.prototype.Login = function (username, password) {
        var _this = this;
        this.loginService.login(username, password).subscribe(function (data) {
            var user = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */]();
            user._id = data["userid"];
            user.username = data["username"];
            user.workoutprograms = data["workoutprograms"];
            console.log(user);
            _this.loggedInUser.next(user);
        });
    };
    FitnessApiService.prototype.CreateUser = function (username, password) {
        var _this = this;
        this.loginService.register(username, password).subscribe(function (data) {
            var user = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */]();
            user._id = data["userid"];
            user.username = data["username"];
            _this.loggedInUser.next(user);
        });
    };
    FitnessApiService.prototype.DeleteUser = function (user) {
        var userUrl = this.baseUrl + 'api/users/' + user._id;
        return this.http.delete(userUrl)
            .toPromise()
            .catch(this.handleError);
    };
    FitnessApiService.prototype.CreateWorkout = function (user, workoutName) {
        var _this = this;
        var userUrl = this.baseUrl + 'api/users/' + user._id + '/workouts';
        var body = { workoutName: workoutName };
        return this.http.post(userUrl, body)
            .toPromise()
            .then(function (response) {
            var user = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */]();
            user._id = response["userid"];
            user.username = response["username"];
            user.workoutprograms = response["workoutprograms"];
            _this.loggedInUser.next(user);
        })
            .catch(this.handleError);
    };
    FitnessApiService.prototype.DeleteWorkout = function (user, workoutId) {
        var _this = this;
        var userUrl = this.baseUrl + 'api/users/' + user._id + '/workouts/' + workoutId;
        return this.http.delete(userUrl)
            .toPromise()
            .then(function (response) {
            var user = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */]();
            user._id = response["userid"];
            user.username = response["username"];
            user.workoutprograms = response["workoutprograms"];
            _this.loggedInUser.next(user);
        })
            .catch(this.handleError);
    };
    FitnessApiService.prototype.CreateExercise = function (user, workoutId, exercise) {
        var _this = this;
        var userUrl = this.baseUrl + 'api/users/' + user._id + "/workouts/" + workoutId + "/exercises";
        var body = {
            exercisename: exercise.exerciseName,
            description: exercise.description,
            sets: exercise.sets,
            reps: exercise.reps
        };
        return this.http.post(userUrl, body)
            .toPromise()
            .then(function (response) {
            var user = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */]();
            user._id = response["userid"];
            user.username = response["username"];
            user.workoutprograms = response["workoutprograms"];
            _this.loggedInUser.next(user);
        })
            .catch(this.handleError);
    };
    FitnessApiService.prototype.DeleteExercise = function (user, workoutId, exerciseId) {
        var _this = this;
        var userUrl = this.baseUrl + 'api/users/' + user._id + "/workouts/" + workoutId + "/exercises/" + exerciseId;
        return this.http.delete(userUrl)
            .toPromise()
            .then(function (response) {
            var user = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */]();
            user._id = response["userid"];
            user.username = response["username"];
            user.workoutprograms = response["workoutprograms"];
            _this.loggedInUser.next(user);
        })
            .catch(this.handleError);
    };
    FitnessApiService.prototype.CreateWorkoutActivity = function (user, workoutId) {
        var _this = this;
        var userUrl = this.baseUrl + 'api/users/' + user._id + "/workouts/" + workoutId + "/workoutActivities";
        return this.http.post(userUrl, {})
            .toPromise()
            .then(function (response) {
            var user = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */]();
            user._id = response["userid"];
            user.username = response["username"];
            user.workoutprograms = response["workoutprograms"];
            _this.loggedInUser.next(user);
        })
            .catch(this.handleError);
    };
    FitnessApiService.prototype.GetAllworkouts = function () {
        var url = this.baseUrl + "api/workouts";
        return this.http.get(url, {})
            .toPromise();
    };
    FitnessApiService.prototype.Logout = function () {
        this.loggedInUser.next(null);
        this.loginService.logout();
    };
    FitnessApiService.prototype.handleError = function (error) {
        console.error("An error occurred", error);
        return Promise.reject(error.message || error);
    };
    return FitnessApiService;
}());
FitnessApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__login_login_service__["a" /* LoginService */]) === "function" && _b || Object])
], FitnessApiService);

var _a, _b;
//# sourceMappingURL=fitness-api.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */]]
    })
], LoginModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.fitnessTokenKey = "fitness-token";
        // this.baseUrl = "https://webassignment4.herokuapp.com/api/"
        this.baseUrl = "http://localhost:5000/api/";
    }
    LoginService.prototype.saveToken = function (token) {
        window.localStorage[this.fitnessTokenKey] = token;
    };
    LoginService.prototype.getToken = function () {
        if (window.localStorage[this.fitnessTokenKey]) {
            return window.localStorage[this.fitnessTokenKey];
        }
        else {
            return '';
        }
    };
    LoginService.prototype.register = function (username, password) {
        var _this = this;
        var url = this.baseUrl + "users";
        var theObservable = this.http.post(url, {
            "username": username,
            "password": password
        }).share();
        theObservable.subscribe(function (data) {
            _this.saveToken(data["token"]);
        }, function (err) {
            if (err.error instanceof Error) {
                // Client-Side or network error occurred
                console.log("An error occurred:", err.error.message);
            }
            else {
                // The backend returned an unsuccessful response code
                console.log("Backend error occurred:", err.error);
            }
        });
        return theObservable;
    };
    LoginService.prototype.login = function (username, password) {
        var _this = this;
        var url = this.baseUrl + "users/login";
        var theObservable = this.http.post(url, {
            "username": username,
            "password": password
        }).share();
        theObservable.subscribe(function (data) {
            _this.saveToken(data["token"]);
        }, function (err) {
            if (err.error instanceof Error) {
                // Client-Side or network error occurred
                console.log("An error occurred:", err.error.message);
            }
            else {
                // The backend returned an unsuccessful response code
                console.log("Backend error occurred:", err.error);
            }
        });
        return theObservable;
    };
    LoginService.prototype.logout = function () {
        window.localStorage.removeItem(this.fitnessTokenKey);
    };
    LoginService.prototype.isLoggedIn = function () {
        var token = this.getToken();
        if (token) {
            console.log("Token Payload" + token);
            var payload = JSON.parse(window.atob(token.split('.')[1]));
            return payload.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row d-flex justify-content-center\">\r\n\t\t<div class=\"col-md-5 box-shadow\">\r\n\t\t\t<h2 class=\"text-center\">Login</h2>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"loginUsername\">Username</label>\r\n\t\t\t\t<input class=\"form-control\" id=\"loginUsername\" placeholder=\"Username\" [formControl]=\"username\"/>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"loginPassword\">Password</label>\r\n\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"loginPassword\" placeholder=\"Password\" [formControl]=\"password\"/>\r\n\t\t\t</div>\r\n\t\t\t<button class=\"btn btn-success\" (click)=\"loginClick()\">Login</button>\r\n\t\t\t<button class=\"btn btn-danger\" (click)=\"logoutClick()\">Logout</button>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-5 box-shadow\">\r\n\t\t\t<h2 class=\"text-center\">Register</h2>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"newUsername\">Username</label>\r\n\t\t\t\t<input class=\"form-control\" id=\"newUsername\" placeholder=\"New Username\" [formControl]=\"newusername\"/>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"newPassword\">Password</label>\r\n\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"newPassword\" placeholder=\"New Password\" [formControl]=\"newpassword\"/>\r\n\t\t\t</div>\r\n\t\t\t<button class=\"btn btn-success\" (click)=\"onCreateUserClick()\">Register</button>\r\n\t\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fitness_api_service__ = __webpack_require__("../../../../../src/app/fitness-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(apiService, loginService) {
        this.apiService = apiService;
        this.loginService = loginService;
        this.username = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
        this.newusername = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
        this.newpassword = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
        console.log("This comes from LoginComponent!");
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginClick = function () {
        this.apiService.Login(this.username.value, this.password.value);
    };
    LoginComponent.prototype.logoutClick = function () {
        this.apiService.Logout();
    };
    LoginComponent.prototype.onCreateUserClick = function () {
        this.apiService.CreateUser(this.newusername.value, this.newpassword.value);
    };
    LoginComponent.prototype.checkWorkouts = function () {
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.apiService.loggedInUser.unsubscribe();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__fitness_api_service__["a" /* FitnessApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__fitness_api_service__["a" /* FitnessApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/workout-program.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutProgram; });
var WorkoutProgram = (function () {
    function WorkoutProgram() {
    }
    return WorkoutProgram;
}());

//# sourceMappingURL=workout-program.js.map

/***/ }),

/***/ "../../../../../src/app/workout/allworkouts/allworkouts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/workout/allworkouts/allworkouts.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"shouldShwo\">\r\n    <div class=\"row d-flex justify-content-center\">\r\n        <div class=\"col-md-5 box-shadow\">\r\n          <h4 class=\"text-center\">Check Out All Workout Programs</h4>\r\n          <button class=\"btn btn-success\" (click)=\"checkWorkouts()\">Go!</button>\r\n        </div>\r\n      </div>\r\n    \r\n    <div *ngFor=\"let workout of (workouts ? workouts : [])\" class=\"row\">\r\n        <table class=\"table\" style=\"margin-top: 64px !important\">\r\n          <thead>\r\n            <th colspan=\"3\">{{workout.workoutName}}\r\n              <small><span *ngIf=\"workout.activities.length > 0\">Last Activity: {{workout.activities[workout.activities.length - 1].timestamp}}</span></small>\r\n            </th>\r\n          </thead>\r\n          <thead>\r\n            <th>Name</th>\r\n            <th>Description</th>\r\n            <th>Sets</th>\r\n            <th>Reps</th>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let exercise of (workout.exercises ? workout.exercises : [])\">\r\n              <td>{{exercise.exerciseName}}</td>\r\n              <td>{{exercise.description}}</td>\r\n              <td>{{exercise.sets}}</td>\r\n              <td>{{exercise.reps}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/workout/allworkouts/allworkouts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllworkoutsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fitness_api_service__ = __webpack_require__("../../../../../src/app/fitness-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllworkoutsComponent = (function () {
    function AllworkoutsComponent(apiService) {
        var _this = this;
        this.apiService = apiService;
        this.apiService.loggedInUser.subscribe(function (user) { return _this.refreshUser(user); });
    }
    AllworkoutsComponent.prototype.ngOnInit = function () {
    };
    AllworkoutsComponent.prototype.checkWorkouts = function () {
        var _this = this;
        this.apiService.GetAllworkouts()
            .then(function (response) {
            _this.workouts = response;
            console.log(_this.workouts);
        });
    };
    AllworkoutsComponent.prototype.refreshUser = function (user) {
        this.workouts = null;
        if (user != null) {
            this.shouldShwo = false;
        }
        else
            this.shouldShwo = true;
    };
    return AllworkoutsComponent;
}());
AllworkoutsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-allworkouts',
        template: __webpack_require__("../../../../../src/app/workout/allworkouts/allworkouts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/workout/allworkouts/allworkouts.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__fitness_api_service__["a" /* FitnessApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__fitness_api_service__["a" /* FitnessApiService */]) === "function" && _a || Object])
], AllworkoutsComponent);

var _a;
//# sourceMappingURL=allworkouts.component.js.map

/***/ }),

/***/ "../../../../../src/app/workout/workout-entry/workout-entry.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/workout/workout-entry/workout-entry.component.html":
/***/ (function(module, exports) {

module.exports = "<div ng-if=\"!workout\">\r\n  <div class=\"row\">\r\n    <table style=\"margin-top: 64px !important\">\r\n      <thead>\r\n        <th colspan=\"3\">{{workout?.workoutName}}\r\n          <small><span *ngIf=\"workout.activities.length > 0\">Last Activity: {{workout.activities[workout.activities.length - 1].timestamp}}</span></small>\r\n        </th>\r\n        <th>\r\n          <button class=\"btn btn-success\" [disabled]=\"!isLoggedIn()\" (click)=\"onLogWorkoutActivity(workout._id)\">Log Activity</button>        \r\n        </th>\r\n        <th>\r\n          <button class=\"btn btn-danger\" [disabled]=\"!isLoggedIn()\" (click)=\"onDeleteWorkout(workout._id)\">Delete</button>\r\n        </th>\r\n      </thead>\r\n      <thead>\r\n        <th>Name</th>\r\n        <th>Description</th>\r\n        <th>Sets</th>\r\n        <th>Reps</th>\r\n        <th>Manage</th>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let exercise of (workout.exercises ? workout.exercises : [])\">\r\n          <td>{{exercise.exerciseName}}</td>\r\n          <td>{{exercise.description}}</td>\r\n          <td>{{exercise.sets}}</td>\r\n          <td>{{exercise.reps}}</td>\r\n          <td>\r\n            <button class=\"btn btn-danger\" [disabled]=\"!isLoggedIn()\" (click)=\"onDeleteExercise(workout._id, exercise._id)\">Delete Exercise</button>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td><input class=\"form-control\" [formControl]=\"exerciseName\"/></td>\r\n          <td><input class=\"form-control\" [formControl]=\"exerciseDescription\" /></td>\r\n          <td><input class=\"form-control\" [formControl]=\"exerciseSets\" /></td>\r\n          <td><input class=\"form-control\" [formControl]=\"exerciseReps\" /></td>\r\n          <td>\r\n            <button class=\"btn btn-success\" [disabled]=\"!isLoggedIn()\" (click)=\"onCreateExercise(workout._id)\">Create Exercise</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/workout/workout-entry/workout-entry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutEntryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fitness_api_service__ = __webpack_require__("../../../../../src/app/fitness-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workout_program__ = __webpack_require__("../../../../../src/app/workout-program.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__exercise__ = __webpack_require__("../../../../../src/app/exercise.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WorkoutEntryComponent = (function () {
    function WorkoutEntryComponent(apiService, loginService) {
        var _this = this;
        this.apiService = apiService;
        this.loginService = loginService;
        this.exerciseName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
        this.exerciseDescription = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
        this.exerciseSets = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
        this.exerciseReps = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
        this.apiService.loggedInUser.subscribe(function (user) { return _this.refreshUser(user); });
    }
    WorkoutEntryComponent.prototype.ngOnInit = function () {
    };
    WorkoutEntryComponent.prototype.isLoggedIn = function () {
        return this.loginService.isLoggedIn();
    };
    WorkoutEntryComponent.prototype.refreshUser = function (user) {
        this.currentUser = user;
    };
    WorkoutEntryComponent.prototype.onDeleteWorkout = function (workoutId) {
        this.apiService.DeleteWorkout(this.currentUser, workoutId);
    };
    WorkoutEntryComponent.prototype.onDeleteExercise = function (workoutId, exerciseId) {
        this.apiService.DeleteExercise(this.currentUser, workoutId, exerciseId);
    };
    WorkoutEntryComponent.prototype.onCreateExercise = function (workoutId) {
        var newExercise = new __WEBPACK_IMPORTED_MODULE_4__exercise__["a" /* Exercise */]();
        newExercise.description = this.exerciseDescription.value;
        newExercise.exerciseName = this.exerciseName.value;
        newExercise.reps = this.exerciseReps.value;
        newExercise.sets = this.exerciseSets.value;
        console.log(newExercise);
        this.apiService.CreateExercise(this.currentUser, workoutId, newExercise);
    };
    WorkoutEntryComponent.prototype.onLogWorkoutActivity = function (workoutId) {
        this.apiService.CreateWorkoutActivity(this.currentUser, workoutId);
    };
    return WorkoutEntryComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__workout_program__["a" /* WorkoutProgram */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__workout_program__["a" /* WorkoutProgram */]) === "function" && _a || Object)
], WorkoutEntryComponent.prototype, "workout", void 0);
WorkoutEntryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-workout-entry',
        template: __webpack_require__("../../../../../src/app/workout/workout-entry/workout-entry.component.html"),
        styles: [__webpack_require__("../../../../../src/app/workout/workout-entry/workout-entry.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__fitness_api_service__["a" /* FitnessApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__fitness_api_service__["a" /* FitnessApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__login_login_service__["a" /* LoginService */]) === "function" && _c || Object])
], WorkoutEntryComponent);

var _a, _b, _c;
//# sourceMappingURL=workout-entry.component.js.map

/***/ }),

/***/ "../../../../../src/app/workout/workout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workout_workout_component__ = __webpack_require__("../../../../../src/app/workout/workout/workout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__workout_entry_workout_entry_component__ = __webpack_require__("../../../../../src/app/workout/workout-entry/workout-entry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__allworkouts_allworkouts_component__ = __webpack_require__("../../../../../src/app/workout/allworkouts/allworkouts.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var WorkoutModule = (function () {
    function WorkoutModule() {
    }
    return WorkoutModule;
}());
WorkoutModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__workout_workout_component__["a" /* WorkoutComponent */], __WEBPACK_IMPORTED_MODULE_4__workout_entry_workout_entry_component__["a" /* WorkoutEntryComponent */], __WEBPACK_IMPORTED_MODULE_5__allworkouts_allworkouts_component__["a" /* AllworkoutsComponent */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__workout_workout_component__["a" /* WorkoutComponent */],
            __WEBPACK_IMPORTED_MODULE_4__workout_entry_workout_entry_component__["a" /* WorkoutEntryComponent */],
            __WEBPACK_IMPORTED_MODULE_5__allworkouts_allworkouts_component__["a" /* AllworkoutsComponent */]
        ]
    })
], WorkoutModule);

//# sourceMappingURL=workout.module.js.map

/***/ }),

/***/ "../../../../../src/app/workout/workout/workout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/workout/workout/workout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-workout-entry *ngFor=\"let workout of (currentUser ? currentUser.workoutprograms : [])\" class=\"table\" [workout] = \"workout\">\r\n</app-workout-entry>\r\n\r\n<div *ngIf=\"currentUser != null\">\r\n    <h2>Create new workout</h2>\r\n    <input class=\"form-control\" [formControl]=\"workoutName\"/>\r\n    <button class=\"btn btn-success\" (click)=\"onCreateWorkout()\">Create Workout</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/workout/workout/workout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fitness_api_service__ = __webpack_require__("../../../../../src/app/fitness-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkoutComponent = (function () {
    function WorkoutComponent(apiService) {
        var _this = this;
        this.apiService = apiService;
        this.workoutName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
        this.apiService.loggedInUser.subscribe(function (user) { return _this.refreshUser(user); });
    }
    WorkoutComponent.prototype.ngOnInit = function () {
    };
    WorkoutComponent.prototype.refreshUser = function (user) {
        this.currentUser = user;
    };
    WorkoutComponent.prototype.onCreateWorkout = function () {
        if (this.workoutName != null) {
            this.apiService.CreateWorkout(this.currentUser, this.workoutName.value);
        }
    };
    return WorkoutComponent;
}());
WorkoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-workout',
        template: __webpack_require__("../../../../../src/app/workout/workout/workout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/workout/workout/workout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__fitness_api_service__["a" /* FitnessApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__fitness_api_service__["a" /* FitnessApiService */]) === "function" && _a || Object])
], WorkoutComponent);

var _a;
//# sourceMappingURL=workout.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map