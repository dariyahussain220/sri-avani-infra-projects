import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef
} from "@angular/material/dialog";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
//import { User } from "src/app/models/user.model";
import { Router, ActivatedRoute, NavigationExtras } from "@angular/router";
import { LoginService } from "src/app/services/login.service";

export interface DialogData {
  animal: "panda" | "unicorn" | "lion";
}

@Component({
  selector: "app-edit-userform",
  templateUrl: "./edit-userform.component.html",
  styleUrls: ["./edit-userform.component.css"]
})
export class EditUserformComponent implements OnInit {
  registerForm: FormGroup;

  submitted = false;
  parentMessage = "true";
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}
  editdata: any;

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
            this.registerForm.controls["guardian"].setValue(
              this.editdata.guardian
            );
            this.registerForm.controls["email"].setValue(this.editdata.email);
            this.registerForm.controls["dob"].setValue(this.editdata.dob);
            this.registerForm.controls["age"].setValue(this.editdata.age);
            this.registerForm.controls["occupation"].setValue(
              this.editdata.occupation
            );
            this.registerForm.controls["nomineeName"].setValue(
              this.editdata.nomineeName
            );
            this.registerForm.controls["nomineeRelationShip"].setValue(
              this.editdata.nomineeRelationShip
            );
            this.registerForm.controls["address"].setValue(
              this.editdata.address
            );
            this.registerForm.controls["mobileNumber"].setValue(
              this.editdata.mobileNumber
            );
            this.registerForm.controls["telephone"].setValue(
              this.editdata.telephone
            );
            this.registerForm.controls["bankAccountNumber"].setValue(
              this.editdata.bankAccountNumber
            );
            this.registerForm.controls["bankName"].setValue(
              this.editdata.bankName
            );
            this.registerForm.controls["ifscCode"].setValue(
              this.editdata.ifscCode
            );
            this.registerForm.controls["panCardNumber"].setValue(
              this.editdata.panCardNumber
            );
            this.registerForm.controls["aadharNumber"].setValue(
              this.editdata.aadharNumber
            );
            this.registerForm.controls["introducedBy"].setValue(
              this.editdata.introducedBy
            );
            this.registerForm.controls["employeeCode"].setValue(
              this.editdata.employeeCode
            );
            this.registerForm.controls["weddingAnniversary"].setValue(
              this.editdata.weddingAnniversary
            );
            this.registerForm.controls["designation"].setValue(
              this.editdata.designation
            );
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
    } else {
      console.log(this.registerForm.value);
      this.updateassociate(this.registerForm.value);
      this.router.navigate(["users-list"]);
      // //Trigger Formdata Submission Api
      // this.router.navigate(["users-list"]);
    }
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }
  updateassociate(data) {
    this.loginService.updateAssociate(data).subscribe(data => {
      console.log(data);
      this.openSnackBar("Updated Successfully", "Done");
    });
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
  paymentdata: any;
  balanceamount: any;
  getPaymentslist(id) {
    this.loginService.getPaymentsList(id).subscribe(data => {
      console.log(data);
      this.balanceamount = data["balanceAmount"];
      this.paymentdata = data["paymentInfo"];
    });
  }
}
@Component({
  selector: "dialog-data-example-dialog",
  templateUrl: "dialog-data-example-dialog.html"
})
export class DialogDataExampleDialog {
  // constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  constructor(
    public dialogRef: MatDialogRef<DialogDataExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {
    this.editForm = this.formBuilder.group({
      amount: ["", Validators.required],
      description: ["", Validators.required]
    });
  }
  userId: any;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.userId = params.uid;
    });
  }
  editForm: FormGroup;

  get f() {
    return this.editForm.controls;
  }

  selection: any;
  onSubmit1() {
    // stop here if form is invalid
    if (this.editForm.invalid) {
      return;
    } else {
      console.log(this.editForm.value, this.selection);
      let data = {
        acceptingPayment: this.selection == "acceptingPayment" ? true : false,
        givingCredit: this.selection == "givingCredit" ? true : false,
        amount: this.editForm.value.amount,
        description: this.editForm.value.description,
        userId: this.userId
      };
      console.log(data);
      this.loginService.addPayments(data).subscribe(data => {
        console.log(data);
        this.dialogRef.close();
        this.router.navigate(["users-list"]);
      });
      //this.updateassociate(this.registerForm.value);
      // //Trigger Formdata Submission Api
      // this.router.navigate(["users-list"]);
    }
  }
}
