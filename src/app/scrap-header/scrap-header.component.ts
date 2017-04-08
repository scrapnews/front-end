import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-scrap-header',
  templateUrl: './scrap-header.component.html',
  styleUrls: ['./scrap-header.component.css']
})
export class ScrapHeaderComponent implements OnInit {

  constructor(private route: Router, private authService : AuthService) { }

  ngOnInit() {
  }

  isAuth(){
    return this.authService.isAuthenticate();
  }

  logout() {
    this.authService.logout();
  }

  onConnected(){
    this.route.navigate(['/login']);
  }

  navigateSupport(){
    this.route.navigate(['/support']);
  }

}
