import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
//import { User } from "src/app/models/user.model";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";
import * as moment from "moment";
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  parentMessage = "true";
  selection: any = "";
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private _snackBar: MatSnackBar
  ) {}

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
      weddingAnniversary: [""],
      designation: ["", Validators.required]
    });
  }
  get f() {
    return this.registerForm.controls;
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.openSnackBar("All fields must be filled out", "Failed to Submit");
      return;
    } else {
      console.log(this.registerForm.value);
      if (this.selection !== "" && this.selection == "single") {
        this.registerForm.value.weddingAnniversary = this.selection;
      } else {
        console.log(
          moment(this.registerForm.value.weddingAnniversary).format(
            "DD/MM/YYYY"
          )
        );
        this.registerForm.value.weddingAnniversary = moment(
          this.registerForm.value.weddingAnniversary
        ).format("DD/MM/YYYY");
      }

      this.registerForm.value.dob = moment(this.registerForm.value.dob).format(
        "DD/MM/YYYY"
      );
      let myJosn = JSON.stringify(this.registerForm.value);
      console.log(myJosn);
      this.addassociate(myJosn);
      // Trigger Formdata Submission Api
      //this.router.navigate(["users-list"]);
    }
  }
  addassociate(data) {
    this.loginService.addAssociate(data).subscribe((res: any) => {
      console.log(res);
      if (res) {
        this.openSnackBar("Form Submitted Successfully", "Done");
        this.router.navigate(["users-list"]);
      }
    });
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
    this.router.navigate(["users-list"]);
  }
  updateCalcs(event) {
    console.log(event);
    let dobage = Math.floor(
      Math.abs(Date.now() - event.getTime()) / (1000 * 3600 * 24) / 365.25
    );
    this.registerForm.controls["age"].setValue(dobage);

    // let timeDiff = Math.abs(Date.now() - event.getTime());
    // let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    // console.log(age);
    // this.registerForm.controls["dob"].setValue(age);
  }
  onCancel() {
    this.registerForm.reset();
    this.router.navigate(["users-list"]);
  }
}
