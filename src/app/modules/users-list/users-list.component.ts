import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { LoginService } from "src/app/services/login.service";

import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
//import { getMaxListeners } from "cluster";
@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"]
})
export class UsersListComponent implements OnInit {
  selectedEntities: any[];
  parentMessage = "true";
  public data: any;
  constructor(private router: Router, private loginService: LoginService) {}
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }
  ngOnInit() {
    this.getassociatedata();
  }

  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  public setSelectedEntities($event: any) {
    this.selectedEntities = $event;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  gotoRegister() {
    this.router.navigate(["register"]);
  }
  editUser(c) {
    console.log(c);
    this.navigate(c.userId);
  }
  navigate(id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        uid: id
      }
    };
    this.router.navigate(["editform"], navigationExtras);
  }
  deleteUser(c) {
    console.log(c.userId);
    this.loginService.deleteAssociate(c.userId).subscribe(data => {
      console.log(data);
      this.getassociatedata();
    });
  }

  getassociatedata() {
    this.loginService.getAssociateList().subscribe(data => {
      console.log(data);
      this.data = data;
      this.dataSource = new MatTableDataSource(this.data);
      // Assign the paginator *after* dataSource is set
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  displayedColumns = [
    "auto_id",
    "email",
    "designation",
    "mobileNumber",
    "dob",
    "Actions"
  ];
}

export interface UserData {
  aadharNumber: string;
  address: string;
  age: number;
  auto_id: string;
  bankAccountNumber: string;
  bankName: string;
  createdOn: string;
  designation: string;
  dob: string;
  email: string;
  employeeCode: string;
  guardian: string;
  ifscCode: string;
  introducedBy: string;
  mobileNumber: string;
  modifiedOn: string;
  name: string;
  nomineeName: string;
  nomineeRelationShip: string;
  occupation: string;
  panCardNumber: string;
  telephone: string;
  userId: string;
  weddingAnniversary: string;
}
