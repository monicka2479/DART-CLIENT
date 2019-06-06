import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlannerComponent } from './planner/planner.component';
import { DartComponent } from './dart/dart.component';
import { ReportComponent } from './report/report.component';
import { ImportComponent } from './import/import.component';

const  routes: Routes  = [
  {
    path:  'dart',
    component:  DartComponent,
    children: [
      {
      path:  'planner',
      component:  PlannerComponent
      },
      {
        path:  'report',
        component:  ReportComponent
      },
      {
        path:  'import',
        component:  ImportComponent
        }
    ]
    }
];
@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class DartRoutingModule { }
