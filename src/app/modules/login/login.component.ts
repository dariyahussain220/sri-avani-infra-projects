import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  user: any = {};
  // user = {username: username, email: email};
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}
  login(LoginForm) {
    console.log(LoginForm.value.username);
    // if (
    //   LoginForm.value.username == "admin" &&
    //   LoginForm.value.username == "admin"
    // ) {
    //   console.log("success");
    //   this.router.navigate(["users-list"]);
    // }
    this.user = {
      username: LoginForm.value.username,
      password: LoginForm.value.password
    };
    console.log(this.user);
    this.loginService.logIn(this.user).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(["users-list"]);
      // if (data.success === true) {

      // }
    });
  }
}
