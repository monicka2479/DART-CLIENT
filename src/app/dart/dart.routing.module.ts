import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlannerComponent } from './planner/planner.component';
import { DartComponent } from './dart/dart.component';

const  routes: Routes  = [
  {
    path:  'dart',
    component:  DartComponent,
    children: [
      {
      path:  'planner',
      component:  PlannerComponent
      }
    ]
    }
];
@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class DartRoutingModule { }
