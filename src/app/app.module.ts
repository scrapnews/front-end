import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ScrapHeaderComponent } from './scrap-header/scrap-header.component';
import { ScrapFooterComponent } from './scrap-footer/scrap-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrapHeaderComponent,
    ScrapFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }