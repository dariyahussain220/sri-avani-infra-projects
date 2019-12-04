import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 user: any = {};
  // user = {username: username, email: email};
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.loginService.logIn(this.user).subscribe( (data: any) => {
      if ( data.success === true ) {
        console.log('login success');
        this.router.navigate(['users-list']);
      }
    });

  }
}
