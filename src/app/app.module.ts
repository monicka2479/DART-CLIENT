import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DartModule } from './dart/dart.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
