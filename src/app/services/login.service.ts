import { Injectable } from "@angular/core";
import { AppSettings } from "src/apiUrl";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}
  logIn(user) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.httpClient
      .post("http://3.1.203.185:8082/" + "login", user, httpOptions)
      .map((res: Response) => {
        return res;
      });
  }
}
