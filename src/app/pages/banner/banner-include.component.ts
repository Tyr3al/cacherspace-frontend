import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-banner-include',
  templateUrl: './banner-include.component.html',
  styleUrls: ['./banner-include.component.css']
})
export class BannerIncludeComponent implements OnInit {
  cacheID: string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    // get cache id from route
    this.cacheID = this.route.snapshot.params['id'];
  }

}
