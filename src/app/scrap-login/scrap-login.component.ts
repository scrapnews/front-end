import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-scrap-login',
  templateUrl: './scrap-login.component.html',
  styleUrls: ['./scrap-login.component.css']
})
export class ScrapLoginComponent implements OnInit {

  ngOnInit() {
  }

  constructor( public authService: AuthService) {
  }

  login(from: string) {
    this.authService.login(from);
  }


}
