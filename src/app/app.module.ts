import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { ScrapHeaderComponent } from './scrap-header/scrap-header.component';
import { ScrapFooterComponent } from './scrap-footer/scrap-footer.component';
import { routing } from './app.routing';
import { ScrapLoginComponent } from './scrap-login/scrap-login.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AuthService} from "./services/auth.service";
import { SupportComponent } from './support/support.component';
import {AuthGuard} from "./guard/AuthGuard";

@NgModule({
  declarations: [
    AppComponent,
    ScrapHeaderComponent,
    ScrapFooterComponent,
    ScrapLoginComponent,
    SupportComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyBMSfb1YWevRP-FrCNRzmKrTbcFftiF_Z4",
        authDomain: "scrapnews-ba63d.firebaseapp.com",
        databaseURL: "https://scrapnews-ba63d.firebaseio.com",
        storageBucket: "scrapnews-ba63d.appspot.com"
      },
      {
        //method: AuthMethods.Popup,
        method: AuthMethods.Redirect
      }
    ),
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
