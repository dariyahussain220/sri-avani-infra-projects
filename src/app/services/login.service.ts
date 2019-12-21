import { Injectable } from "@angular/core";
//import { AppSettings } from "src/apiUrl";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import "rxjs/add/operator/map";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
const Url = "http://52.221.179.156:8082/";
@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}
  logIn(user) {
    return this.httpClient
      .post(Url + "login", user, httpOptions)
      .map((res: Response) => {
        return res;
      });
  }
  addAssociate(data) {
    return this.httpClient
      .post(Url + "associates", data, httpOptions)
      .map((res: Response) => {
        return res;
      });
  }
  deleteAssociate(id) {
    return this.httpClient
      .delete(Url + "associates/" + id, httpOptions)
      .map((res: Response) => {
        return res;
      });
  }
  getAssociateList() {
    return this.httpClient
      .get(Url + "associates", httpOptions)
      .map((res: Response) => {
        if (res) {
          return res;
        }
      });
  }
  updateAssociate(data) {
    return this.httpClient
      .put(Url + "associates/" + data.userId, data, httpOptions)
      .map((res: Response) => {
        return res;
      });
  }
  getPaymentsList(id) {
    return this.httpClient
      .get(Url + "paymentInfo/" + id, httpOptions)
      .map((res: Response) => {
        if (res) {
          return res;
        }
      });
  }
  addPayments(data) {
    return this.httpClient
      .post(Url + "paymentInfo/" + data.userId, data, httpOptions)
      .map((res: Response) => {
        if (res) {
          return res;
        }
      });
  }
  deletePayments(id) {
    return this.httpClient
      .delete(Url + "paymentInfo/" + id, httpOptions)
      .map((res: Response) => {
        if (res) {
          return res;
        }
      });
  }
  sendMessegeservice(data) {
    return this.httpClient
      .post(Url + "/message/contact", data, httpOptions)
      .map((res: Response) => {
        if (res) {
          return res;
        }
      });
  }
}
