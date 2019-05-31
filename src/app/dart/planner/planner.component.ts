import { Component, OnInit } from '@angular/core';
import { DartService } from '../dart.service';
import { Dart } from '../dart';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})
export class PlannerComponent implements OnInit {

  constructor(private dartService: DartService) { }
  name: string;
  date: string;
  darts: Dart[] = [];
  list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  ngOnInit() {
    for (let i of this.list) {
      let dart1 = new Dart('', '', '08.00 AM', '09.00 AM', 'Task 1', 'true1')
      this.darts.push(dart1);
    }
  }

  onSubmit(name, date) {
    // console.log('Before: '+ JSON.stringify(this.darts));
    console.log('name: ' + name + 'date: ' + date);
    for (const dart of this.darts) {
      //  console.log('plannedTask: '+ dart.plannedTask); // 1, 'string', false
      dart.userName = name;
      // console.log('Name for :' + dart.dartName);
      dart.taskDate = date;
    }

    console.log('After: ' + this.darts);
    this.dartService.enroll(this.darts)
      .subscribe(
        data => console.log('success', data),
        error => console.error('success', error)
      )
  }
}
