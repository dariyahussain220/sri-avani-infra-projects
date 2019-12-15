import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { Router } from "@angular/router";
let LoginComponent = class LoginComponent {
    // user = {username: username, email: email};
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.user = {};
    }
    ngOnInit() { }
    login(LoginForm) {
        console.log(LoginForm.value.username);
        // if (
        //   LoginForm.value.username == "admin" &&
        //   LoginForm.value.username == "admin"
        // ) {
        //   console.log("success");
        //   this.router.navigate(["users-list"]);
        // }
        this.user = {
            username: LoginForm.value.username,
            password: LoginForm.value.password
        };
        console.log(this.user);
        this.loginService.logIn(this.user).subscribe((data) => {
            console.log(data);
            this.router.navigate(["users-list"]);
            // if (data.success === true) {
            // }
        });
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: "app-login",
        templateUrl: "./login.component.html",
        styleUrls: ["./login.component.scss"]
    }),
    tslib_1.__metadata("design:paramtypes", [LoginService, Router])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map