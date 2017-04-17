import { Component, OnInit } from '@angular/core';
import { BannerService } from '../banner.service';
import { Banner } from '../banner';

@Component({
  selector: 'app-banner-list',
  templateUrl: './banner-list.component.html',
  styleUrls: ['./banner-list.component.css']

})
export class BannerListComponent implements OnInit {
  // hold banner data
  banners: Banner[] = [];

  constructor(private _bannerService: BannerService) {
  }

  ngOnInit() {
    this.banners = this._bannerService.getAll();
  }

}
