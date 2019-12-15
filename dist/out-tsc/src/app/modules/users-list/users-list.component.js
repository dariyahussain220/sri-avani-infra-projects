import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";
//import { getMaxListeners } from "cluster";
let UsersListComponent = class UsersListComponent {
    constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.parentMessage = "true";
    }
    ngOnInit() {
        this.getassociatedata();
    }
    setSelectedEntities($event) {
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
        let navigationExtras = {
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
};
UsersListComponent = tslib_1.__decorate([
    Component({
        selector: "app-users-list",
        templateUrl: "./users-list.component.html",
        styleUrls: ["./users-list.component.css"]
    }),
    tslib_1.__metadata("design:paramtypes", [Router, LoginService])
], UsersListComponent);
export { UsersListComponent };
//# sourceMappingURL=users-list.component.js.map