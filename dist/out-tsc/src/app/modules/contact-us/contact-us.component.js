import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
let ContactUsComponent = class ContactUsComponent {
    // title = 'My first AGM project';
    // lat = 51.678418;
    // lng = 7.809007;
    constructor() {
        // google maps zoom level
        this.zoom = 8;
        // initial center position for the map
        this.lat = 51.673858;
        this.lng = 7.815982;
        this.markers = [
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
    ngOnInit() { }
    clickedMarker(label, index) {
        console.log(`clicked the marker: ${label || index}`);
    }
    mapClicked($event) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        });
    }
    markerDragEnd(m, $event) {
        console.log("dragEnd", m, $event);
    }
};
ContactUsComponent = tslib_1.__decorate([
    Component({
        selector: "app-contact-us",
        templateUrl: "./contact-us.component.html",
        styleUrls: ["./contact-us.component.css"]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ContactUsComponent);
export { ContactUsComponent };
//# sourceMappingURL=contact-us.component.js.map