import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
//import { User } from "src/app/models/user.model";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";
import * as moment from "moment";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  parentMessage = "true";
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
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
    } else {
      console.log(this.registerForm.value);
      console.log(
        moment(this.registerForm.value.weddingAnniversary).format("DD/MM/YYYY")
      );
      this.registerForm.value.weddingAnniversary = moment(
        this.registerForm.value.weddingAnniversary
      ).format("DD/MM/YYYY");
      this.registerForm.value.dob = moment(this.registerForm.value.dob).format(
        "DD/MM/YYYY"
      );
      let myJosn = JSON.stringify(this.registerForm.value);
      console.log(myJosn);
      this.addassociate(myJosn);
      // Trigger Formdata Submission Api
      this.router.navigate(["users-list"]);
    }
  }
  addassociate(data) {
    this.loginService.addAssociate(data).subscribe((res: any) => {
      console.log(res);
      if (res) {
        this.router.navigate(["users-list"]);
      }
    });
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
    this.router.navigate(["users-list"]);
  }
  onCancel() {
    this.registerForm.reset();
    this.router.navigate(["users-list"]);
  }
}
