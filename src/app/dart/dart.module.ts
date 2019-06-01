import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlannerComponent } from './planner/planner.component';
import { ReportComponent } from './report/report.component';
import { DartComponent } from './dart/dart.component';
import { DartRoutingModule } from './dart.routing.module';

@NgModule({
  declarations: [PlannerComponent, DartComponent, ReportComponent],
  imports: [
    BrowserModule, CommonModule, HttpClientModule, DartRoutingModule, FormsModule
  ],
  providers: [
    HttpClient
  ],
})

export class DartModule { }
