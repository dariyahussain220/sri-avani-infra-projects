import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
//import { getMaxListeners } from "cluster";
@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"]
})
export class UsersListComponent implements OnInit {
  selectedEntities: any[];

  public data: any;
  constructor(private router: Router) {}

  ngOnInit() {
    this.data = [
      {
        userId: "5dee7f28d5ac4d5f81f4c066", //not editable
        name: "dariya",
        guardian: "NA",
        email: "dariys@getMaxListeners.com",
        dob: "290183", //not editable
        age: "35",
        occupation: "software engineer",
        nomineeName: "devi", //not editable
        nomineeRelationShip: "lover",
        address: "hitech-city,hyderabad",
        mobileNumber: "7855132122", //not editable
        telephone: "0401222452",
        bankAccountNumber: "64521345",
        bankName: "SBI",
        ifscCode: "SBIN004903",
        panCardNumber: "AHFPVXXXXX", //not editable
        aadharNumber: "XXXX-XXXX-XXXX", //not editable
        introducedBy: "Person1",
        employeeCode: "4903",
        weddingAnniversary: "12/05/2009",
        designation: "Software Engineer",
        createdOn: "12/12/12",
        modifiedOn: "12/12/19"
      }
      // {
      //   id: "13324",
      //   email: "dariya@mail.com",
      //   designation: "Senior software engineer",
      //   mobileNumber: "45215866555",
      //   dob: "12-11-1880"
      // },
      // {
      //   id: "13325",
      //   email: "mahe@mail.com",
      //   designation: "Senior software engineer",
      //   mobileNumber: "24545",
      //   dob: "28-11-1852"
      // },
      // {
      //   id: "13326",
      //   email: "dariya123@mail.com",
      //   designation: "Senior software engineer",
      //   mobileNumber: "45215866555",
      //   dob: "12-11-1880"
      // },
      // {
      //   id: "13326",
      //   email: "mahe123@mail.com",
      //   designation: "Senior software engineer",
      //   mobileNumber: "24545",
      //   dob: "28-11-1852"
      // },
      // {
      //   id: "13324",
      //   email: "dariya@mail.com",
      //   designation: "Senior software engineer",
      //   mobileNumber: "45215866555",
      //   dob: "12-11-1880"
      // },
      // {
      //   id: "13325",
      //   email: "mahe@mail.com",
      //   designation: "Senior software engineer",
      //   mobileNumber: "24545",
      //   dob: "28-11-1852"
      // },
      // {
      //   id: "13326",
      //   email: "dariya123@mail.com",
      //   designation: "Senior software engineer",
      //   mobileNumber: "45215866555",
      //   dob: "12-11-1880"
      // },
      // {
      //   id: "13326",
      //   email: "mahe123@mail.com",
      //   designation: "Senior software engineer",
      //   mobileNumber: "24545",
      //   dob: "28-11-1852"
      // }
    ];
    console.log(this.data);
  }

  public setSelectedEntities($event: any) {
    this.selectedEntities = $event;
  }
  gotoRegister() {
    this.router.navigate(["register"]);
  }
  editUser(c) {
    console.log(c);
  }
  deleteUser(c) {
    console.log(c.id);
  }
}
