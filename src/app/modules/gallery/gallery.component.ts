import { Component, OnInit } from "@angular/core";
import { LightboxEvent, LIGHTBOX_EVENT, Lightbox } from "ngx-lightbox";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"]
})
export class GalleryComponent implements OnInit {
  private _albums: any = [];
  constructor(private _lightbox: Lightbox) {
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
  desired_columns: any;
  desired_rowHeight: any;
  ngOnInit() {
    this.desired_columns = 2;

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
  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
