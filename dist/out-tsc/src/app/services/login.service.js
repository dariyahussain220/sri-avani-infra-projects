import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
//import { AppSettings } from "src/apiUrl";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import "rxjs/add/operator/map";
const httpOptions = {
    headers: new HttpHeaders({
        "Content-Type": "application/json"
    })
};
const Url = "http://13.250.123.225:8082/";
let LoginService = class LoginService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    logIn(user) {
        return this.httpClient
            .post(Url + "login", user, httpOptions)
            .map((res) => {
            return res;
        });
    }
    addAssociate(data) {
        return this.httpClient
            .post(Url + "associates", data, httpOptions)
            .map((res) => {
            return res;
        });
    }
    deleteAssociate(id) {
        return this.httpClient
            .delete(Url + "associates/" + id, httpOptions)
            .map((res) => {
            return res;
        });
    }
    getAssociateList() {
        return this.httpClient
            .get(Url + "associates", httpOptions)
            .map((res) => {
            if (res) {
                return res;
            }
        });
    }
    updateAssociate(data) {
        return this.httpClient
            .put(Url + "associates/" + data.userId, data, httpOptions)
            .map((res) => {
            return res;
        });
    }
    getPaymentsList(id) {
        return this.httpClient
            .get(Url + "paymentInfo/" + id, httpOptions)
            .map((res) => {
            if (res) {
                return res;
            }
        });
    }
    addPayments(data) {
        return this.httpClient
            .post(Url + "paymentInfo", data, httpOptions)
            .map((res) => {
            if (res) {
                return res;
            }
        });
    }
    deletePayments(id) {
        return this.httpClient
            .delete(Url + "paymentInfo/" + id, httpOptions)
            .map((res) => {
            if (res) {
                return res;
            }
        });
    }
};
LoginService = tslib_1.__decorate([
    Injectable({
        providedIn: "root"
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], LoginService);
export { LoginService };
//# sourceMappingURL=login.service.js.map