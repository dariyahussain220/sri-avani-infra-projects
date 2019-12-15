import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { LoginService } from "src/app/services/login.service";
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

  ngOnInit() {
    this.getassociatedata();
  }

  public setSelectedEntities($event: any) {
    this.selectedEntities = $event;
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
    });
  }
}
