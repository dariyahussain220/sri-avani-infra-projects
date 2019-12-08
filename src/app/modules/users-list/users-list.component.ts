import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
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
        id: "13324",
        email: "dariya@mail.com",
        designation: "Senior software engineer",
        mobileNumber: "45215866555",
        dob: "12-11-1880"
      },
      {
        id: "13325",
        email: "mahe@mail.com",
        designation: "Senior software engineer",
        mobileNumber: "24545",
        dob: "28-11-1852"
      },
      {
        id: "13326",
        email: "dariya123@mail.com",
        designation: "Senior software engineer",
        mobileNumber: "45215866555",
        dob: "12-11-1880"
      },
      {
        id: "13326",
        email: "mahe123@mail.com",
        designation: "Senior software engineer",
        mobileNumber: "24545",
        dob: "28-11-1852"
      },
      {
        id: "13324",
        email: "dariya@mail.com",
        designation: "Senior software engineer",
        mobileNumber: "45215866555",
        dob: "12-11-1880"
      },
      {
        id: "13325",
        email: "mahe@mail.com",
        designation: "Senior software engineer",
        mobileNumber: "24545",
        dob: "28-11-1852"
      },
      {
        id: "13326",
        email: "dariya123@mail.com",
        designation: "Senior software engineer",
        mobileNumber: "45215866555",
        dob: "12-11-1880"
      },
      {
        id: "13326",
        email: "mahe123@mail.com",
        designation: "Senior software engineer",
        mobileNumber: "24545",
        dob: "28-11-1852"
      }
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
