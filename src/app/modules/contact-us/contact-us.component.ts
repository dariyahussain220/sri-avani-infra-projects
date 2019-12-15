import { Component, OnInit } from "@angular/core";
import { MouseEvent } from "@agm/core";
import { LoginService } from "src/app/services/login.service";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.css"]
})
export class ContactUsComponent implements OnInit {
  // title = 'My first AGM project';
  // lat = 51.678418;
  // lng = 7.809007;
  contactForm: FormGroup;
  constructor(
    private loginSerice: LoginService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.contactForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      message: new FormControl()
    });
  }

  ngOnInit() {}
  // google maps zoom level
  zoom: number = 8;

  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log("dragEnd", m, $event);
  }
  name: any;
  email: any;
  message: any;
  sendMessage() {
    // console.log(this.name, this.message, this.email);
    // let data = {
    //   name: this.name,
    //   message: this.message,
    //   email: this.email
    // };
    console.log(this.contactForm.value);

    this.loginSerice
      .sendMessegeservice(this.contactForm.value)
      .subscribe(data => {
        console.log(data);
        this.openSnackBar("Details sent ", "Contact you shortly");
        this.contactForm.reset();
      });
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }
  markers: marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: "A",
      draggable: true
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: "B",
      draggable: false
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: "C",
      draggable: true
    }
  ];
}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
