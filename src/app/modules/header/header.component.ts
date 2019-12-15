import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  showFiller = false;
  @Input() childMessage: string;
  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.childMessage);
  }
  logOut() {
    this.router.navigate(["home"]);
  }
}
