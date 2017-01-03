import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-scrap-header',
  templateUrl: './scrap-header.component.html',
  styleUrls: ['./scrap-header.component.css']
})
export class ScrapHeaderComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  onConnected(){
    this.route.navigate(['/login']);
  }

}
