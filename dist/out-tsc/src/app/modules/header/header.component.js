import * as tslib_1 from "tslib";
import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
let HeaderComponent = class HeaderComponent {
    constructor(router) {
        this.router = router;
        this.showFiller = false;
    }
    ngOnInit() {
        console.log(this.childMessage);
    }
    logOut() {
        this.router.navigate(["home"]);
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], HeaderComponent.prototype, "childMessage", void 0);
HeaderComponent = tslib_1.__decorate([
    Component({
        selector: "app-header",
        templateUrl: "./header.component.html",
        styleUrls: ["./header.component.css"]
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map