import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

import Vibrant from 'node-vibrant';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  movie = null;
  background = null;
  imageUrl = null;

  mainColor = "#fff";
  textColor = "#000";
  cast = [];

  opts = {
    slidesPerView: 2.4,
    spaceBetween: 10,
    slidesOffsetBefore: 10
  }


  constructor(private api: ApiService, private route: ActivatedRoute, private elementRef: ElementRef ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const type = this.route.snapshot.paramMap.get('type');

    this.api.getDetails(id, type).subscribe(res => {
      console.log(res);
      this.movie = res;

      if (this.movie.backdrop_path) {
        this.background = `${environment.images}/w400/${this.movie.backdrop_path}`
      }

      if (this.movie.poster_path) {
        this.imageUrl = `${environment.images}/w92/${this.movie.poster_path}`;
        this.getDominantColor();
      }
    });

    this.api.getCast(id, type).subscribe(res => {
      console.log(res);
      this.cast = res;
    });
  }

  getDominantColor() {
    Vibrant.from(`${environment.images}/w400/${this.movie.poster_path}`).getPalette((err, palette) => {
      console.log(palette);
      this.mainColor = palette.Vibrant.getHex();
      this.textColor = palette.Vibrant.getTitleTextColor();
      this.elementRef.nativeElement.style.setProperty('--main', this.mainColor)
      const mainColorCode = this.mainColor.substr(1);
      const mainDark = '#' + this.lightenDarkenColor(mainColorCode, -40);
      this.elementRef.nativeElement.style.setProperty('--maindark', mainDark);
    });
  }

  lightenDarkenColor(col, amt) {
    const num = parseInt(col, 16);
    const r = (num >> 16) + amt;
    const b = ((num >> 8) & 0x00FF) + amt;
    const g = (num & 0x0000FF) + amt;
    const newColor = g | (b << 8) | (r << 16);
    return newColor.toString(16);
  }




}
