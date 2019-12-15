import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Lightbox } from "ngx-lightbox";
let GalleryComponent = class GalleryComponent {
    constructor(_lightbox) {
        this._lightbox = _lightbox;
        this._albums = [];
        this._albums = [];
        for (let i = 1; i <= 28; i++) {
            const src = "../assets/gallery/image" + i + ".jpg";
            const caption = "Image " + i + " caption here";
            // const thumb = "assets/image" + i + "-thumb.jpg";
            const album = {
                src: src,
                caption: caption
                //  thumb: thumb
            };
            this._albums.push(album);
        }
    }
    ngOnInit() {
        // for (let i = 1; i <= 28; i++) {
        //   const src = "../assets/gallery/image" + i + ".jpg";
        //   const caption = "Image " + i + " caption here";
        //   // const thumb = "assets/image" + i + "-thumb.jpg";
        //   const album = {
        //     src: src,
        //     caption: caption
        //     //  thumb: thumb
        //   };
        //   this._albums.push(album);
        // }
        console.log(this._albums);
        // console.log(imgPath);
        // this._albums.push({ src: "../assets/gallery/image1.jpg", caption: "test" });
    }
    open(index) {
        // open lightbox
        this._lightbox.open(this._albums, index);
    }
    close() {
        // close lightbox programmatically
        this._lightbox.close();
    }
};
GalleryComponent = tslib_1.__decorate([
    Component({
        selector: "app-gallery",
        templateUrl: "./gallery.component.html",
        styleUrls: ["./gallery.component.css"]
    }),
    tslib_1.__metadata("design:paramtypes", [Lightbox])
], GalleryComponent);
export { GalleryComponent };
//# sourceMappingURL=gallery.component.js.map