import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ScrapHeaderComponent } from './scrap-header/scrap-header.component';
import { ScrapFooterComponent } from './scrap-footer/scrap-footer.component';
import { routing } from './app.routing';
import { ScrapLoginComponent } from './scrap-login/scrap-login.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrapHeaderComponent,
    ScrapFooterComponent,
    ScrapLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
