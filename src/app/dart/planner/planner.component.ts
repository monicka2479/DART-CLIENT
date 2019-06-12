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
  curDate = new Date();
  name: string;
  date: Date = this.curDate;
  darts: Dart[] = [];
  message: string;
  ngOnInit() {
      const dart1 = new Dart('', '', '08:00 AM', '09:00 AM', '', '');
      const dart2 = new Dart('', '', '09:00 AM', '10:00 AM', '', '');
      const dart3 = new Dart('', '', '10:00 AM', '11:00 AM', '', '');
      const dart4 = new Dart('', '', '11:00 AM', '12:00 AM', '', '');
      const dart5 = new Dart('', '', '12:00 AM', '01:00 PM', '', '');
      const dart6 = new Dart('', '', '01:00 PM', '02:00 PM', '', '');
      const dart7 = new Dart('', '', '02:00 PM', '03:00 PM', '', '');
      const dart8 = new Dart('', '', '03:00 PM', '04:00 PM', '', '');
      const dart9 = new Dart('', '', '04:00 PM', '05:00 PM', '', '');
      const dart10 = new Dart('', '', '05:00 PM', '06:00 PM', '', '');
      const dart11 = new Dart('', '', '06:00 PM', '07:00 PM', '', '');

      this.darts.push(dart1);
      this.darts.push(dart2);
      this.darts.push(dart3);
      this.darts.push(dart4);
      this.darts.push(dart5);
      this.darts.push(dart6);
      this.darts.push(dart7);
      this.darts.push(dart8);
      this.darts.push(dart9);
      this.darts.push(dart10);
      this.darts.push(dart11);
  }

  trackByIndex(index: number, obj: any ): any{
    return index;
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
    this.dartService.create(this.darts)
    .subscribe( message => {
      console.log('message'+ message),
        this.message = message;
      })
  }
}
