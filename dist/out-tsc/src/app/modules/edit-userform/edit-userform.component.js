import * as tslib_1 from "tslib";
import { Component, Inject } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
//import { User } from "src/app/models/user.model";
import { Router, ActivatedRoute } from "@angular/router";
import { LoginService } from "src/app/services/login.service";
let EditUserformComponent = class EditUserformComponent {
    constructor(formBuilder, router, route, loginService, dialog) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.loginService = loginService;
        this.dialog = dialog;
        this.submitted = false;
        this.parentMessage = "true";
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            console.log(params);
            this.loginService.getAssociateList().subscribe(data => {
                console.log(data);
                this.editdata = data;
                for (let i = 0; i < this.editdata.length; i++) {
                    if (params.uid === data[i].userId) {
                        this.editdata = data[i];
                        this.getPaymentslist(this.editdata.userId);
                        console.log(this.editdata);
                        this.registerForm.controls["userId"].setValue(this.editdata.userId);
                        this.registerForm.controls["name"].setValue(this.editdata.name);
                        this.registerForm.controls["guardian"].setValue(this.editdata.guardian);
                        this.registerForm.controls["email"].setValue(this.editdata.email);
                        this.registerForm.controls["dob"].setValue(this.editdata.dob);
                        this.registerForm.controls["age"].setValue(this.editdata.age);
                        this.registerForm.controls["occupation"].setValue(this.editdata.occupation);
                        this.registerForm.controls["nomineeName"].setValue(this.editdata.nomineeName);
                        this.registerForm.controls["nomineeRelationShip"].setValue(this.editdata.nomineeRelationShip);
                        this.registerForm.controls["address"].setValue(this.editdata.address);
                        this.registerForm.controls["mobileNumber"].setValue(this.editdata.mobileNumber);
                        this.registerForm.controls["telephone"].setValue(this.editdata.telephone);
                        this.registerForm.controls["bankAccountNumber"].setValue(this.editdata.bankAccountNumber);
                        this.registerForm.controls["bankName"].setValue(this.editdata.bankName);
                        this.registerForm.controls["ifscCode"].setValue(this.editdata.ifscCode);
                        this.registerForm.controls["panCardNumber"].setValue(this.editdata.panCardNumber);
                        this.registerForm.controls["aadharNumber"].setValue(this.editdata.aadharNumber);
                        this.registerForm.controls["introducedBy"].setValue(this.editdata.introducedBy);
                        this.registerForm.controls["employeeCode"].setValue(this.editdata.employeeCode);
                        this.registerForm.controls["weddingAnniversary"].setValue(this.editdata.weddingAnniversary);
                        this.registerForm.controls["designation"].setValue(this.editdata.designation);
                        break;
                    }
                }
            });
        });
        this.registerForm = new FormGroup({
            userId: new FormControl(),
            name: new FormControl(),
            guardian: new FormControl(),
            email: new FormControl(),
            dob: new FormControl(),
            age: new FormControl(),
            occupation: new FormControl(),
            nomineeName: new FormControl(),
            nomineeRelationShip: new FormControl(),
            address: new FormControl(),
            mobileNumber: new FormControl(),
            telephone: new FormControl(),
            bankAccountNumber: new FormControl(),
            bankName: new FormControl(),
            ifscCode: new FormControl(),
            panCardNumber: new FormControl(),
            aadharNumber: new FormControl(),
            introducedBy: new FormControl(),
            employeeCode: new FormControl(),
            weddingAnniversary: new FormControl(),
            designation: new FormControl()
        });
    }
    get f() {
        return this.registerForm.controls;
    }
    openDialog() {
        this.dialog.open(DialogDataExampleDialog, {
            data: {
                animal: "panda"
            }
        });
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        else {
            console.log(this.registerForm.value);
            this.updateassociate(this.registerForm.value);
            // //Trigger Formdata Submission Api
            // this.router.navigate(["users-list"]);
        }
    }
    updateassociate(data) {
        this.loginService.updateAssociate(data).subscribe(data => {
            console.log(data);
        });
    }
    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
    getPaymentslist(id) {
        this.loginService.getPaymentsList(id).subscribe(data => {
            console.log(data);
            this.paymentdata = data;
        });
    }
};
EditUserformComponent = tslib_1.__decorate([
    Component({
        selector: "app-edit-userform",
        templateUrl: "./edit-userform.component.html",
        styleUrls: ["./edit-userform.component.css"]
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder,
        Router,
        ActivatedRoute,
        LoginService,
        MatDialog])
], EditUserformComponent);
export { EditUserformComponent };
let DialogDataExampleDialog = class DialogDataExampleDialog {
    // constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
    constructor(dialogRef, data, route, router) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.route = route;
        this.router = router;
    }
    onNoClick() {
        this.route.queryParams.subscribe(params => {
            console.log(params);
            this.navigate(params.uid);
            this.dialogRef.close();
        });
    }
    navigate(id) {
        let navigationExtras = {
            queryParams: {
                uid: id
            }
        };
        this.router.navigate(["editform"], navigationExtras);
    }
};
DialogDataExampleDialog = tslib_1.__decorate([
    Component({
        selector: "dialog-data-example-dialog",
        templateUrl: "dialog-data-example-dialog.html"
    }),
    tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
    tslib_1.__metadata("design:paramtypes", [MatDialogRef, Object, ActivatedRoute,
        Router])
], DialogDataExampleDialog);
export { DialogDataExampleDialog };
//# sourceMappingURL=edit-userform.component.js.map