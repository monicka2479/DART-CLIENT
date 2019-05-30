import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlannerComponent } from './planner/planner.component';
import { DartComponent } from './dart/dart.component';
import { DartRoutingModule } from './dart.routing.module';

@NgModule({
  declarations: [PlannerComponent, DartComponent],
  imports: [
    CommonModule, DartRoutingModule
  ]
})

export class DartModule { }
