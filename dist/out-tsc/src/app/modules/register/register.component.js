import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
//import { User } from "src/app/models/user.model";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";
let RegisterComponent = class RegisterComponent {
    constructor(formBuilder, router, loginService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.loginService = loginService;
        this.submitted = false;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ["", Validators.required],
            guardian: ["", Validators.required],
            email: ["", Validators.required],
            dob: ["", Validators.required],
            age: ["", Validators.required],
            occupation: ["", Validators.required],
            nomineeName: ["", Validators.required],
            nomineeRelationShip: ["", Validators.required],
            address: ["", Validators.required],
            mobileNumber: ["", Validators.required],
            telephone: ["", Validators.required],
            bankAccountNumber: ["", Validators.required],
            bankName: ["", Validators.required],
            ifscCode: ["", Validators.required],
            panCardNumber: ["", Validators.required],
            aadharNumber: ["", Validators.required],
            introducedBy: ["", Validators.required],
            employeeCode: ["", Validators.required],
            weddingAnniversary: ["", Validators.required],
            designation: ["", Validators.required]
        });
    }
    get f() {
        return this.registerForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        else {
            console.log(this.registerForm.value);
            let myJosn = JSON.stringify(this.registerForm.value);
            this.addassociate(myJosn);
            //Trigger Formdata Submission Api
            // this.router.navigate(["users-list"]);
        }
    }
    addassociate(data) {
        this.loginService.addAssociate(data).subscribe((res) => {
            console.log(res);
            if (res) {
                this.router.navigate(["users-list"]);
            }
        });
    }
    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
};
RegisterComponent = tslib_1.__decorate([
    Component({
        selector: "app-register",
        templateUrl: "./register.component.html",
        styleUrls: ["./register.component.css"]
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder,
        Router,
        LoginService])
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map