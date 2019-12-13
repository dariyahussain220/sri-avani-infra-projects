import { Injectable } from "@angular/core";
//import { AppSettings } from "src/apiUrl";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import "rxjs/add/operator/map";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    observe: "response"
  })
};
const Url = "http://3.1.203.185:8082/";
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
      .post(Url + "associates", id, httpOptions)
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
      .put(Url + "associates", data, httpOptions)
      .map((res: Response) => {
        return res;
      });
  }
}
