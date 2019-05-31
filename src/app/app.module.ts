import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DartModule } from './dart/dart.module';

import {HttpClient, HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DartModule

  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
