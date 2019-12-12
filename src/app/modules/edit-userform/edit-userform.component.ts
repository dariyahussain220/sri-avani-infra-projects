import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
//import { User } from "src/app/models/user.model";
import { Router } from "@angular/router";
@Component({
  selector: "app-edit-userform",
  templateUrl: "./edit-userform.component.html",
  styleUrls: ["./edit-userform.component.css"]
})
export class EditUserformComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      identitynumber: ["", Validators.required],
      name: ["", Validators.required],
      fatherName: ["", Validators.required],
      eMail: ["", [Validators.required]],
      contactNumber: ["", [Validators.required]],
      nomineeName: ["", Validators.required],
      weddingdate: ["", Validators.required],
      address: ["", Validators.required],
      occupation: ["", Validators.required],
      dob: ["", Validators.required],
      age: ["", Validators.required],
      designation: ["", Validators.required],
      telephone: ["", Validators.required],
      mobile: ["", Validators.required],
      // fathername: ["", Validators.required],
      accno: ["", Validators.required],
      ifsccode: ["", Validators.required],
      pancard: ["", Validators.required],
      aadharno: ["", Validators.required]
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
