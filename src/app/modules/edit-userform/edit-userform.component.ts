import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
//import { User } from "src/app/models/user.model";
import { Router, ActivatedRoute } from "@angular/router";
import { LoginService } from "src/app/services/login.service";
@Component({
  selector: "app-edit-userform",
  templateUrl: "./edit-userform.component.html",
  styleUrls: ["./edit-userform.component.css"]
})
export class EditUserformComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private dialog: MatDialog
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
            console.log(this.editdata);

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
  animal: string;
  name: string;

  openDialog(): void {
    const dialogRef = this.dialog.open("dialogoverviewexampledialog", {
      width: "250px",
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    } else {
      console.log(this.registerForm.value);
      //Trigger Formdata Submission Api
      this.router.navigate(["users-list"]);
    }

    //display form values on success
    // alert(
    //   "SUCCESS!! :-)\n\n" + JSON.stringify(this.registerForm.value, null, 4)
    // );
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: "dialogoverviewexampledialog",
  template: `
    <h1 mat-dialog-title>Hi {{ data.name }}</h1>
    <div mat-dialog-content>
      <p>What's your favorite animal?</p>
      <mat-form-field>
        <input matInput [(ngModel)]="data.animal" />
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">No Thanks</button>
      <button mat-button [mat-dialog-close]="data.animal" cdkFocusInitial>
        Ok
      </button>
    </div>
  `
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
