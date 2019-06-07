import { Component, OnInit } from '@angular/core';
import { DartService } from '../dart.service';
import { Dart } from '../dart';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private dartService: DartService) { }
  actualTask: string;
  dart:any;
  darts=[
{ dartName: "Madhan", taskDate: "30/05/2019", fromTime: "08.00 AM", toTime: "09.00 AM", plannedTask: "Task 1", remarks: "true 1", actualTask:""},
{ dartName: "Madhan",taskDate: "30/05/2019", fromTime: "08.00 AM", toTime: "09.00 AM", plannedTask: "Task 1", remarks: "true 1", actualTask:""},
{ dartName: "Madhan",taskDate: "30/05/2019", fromTime: "08.00 AM", toTime: "09.00 AM", plannedTask: "Task 1", remarks: "true 1", actualTask:""},
{ dartName: "Madhan",taskDate: "30/05/2019", fromTime: "08.00 AM", toTime: "09.00 AM", plannedTask: "Task 1", remarks: "true 1", actualTask:""},
{ dartName: "Madhan",taskDate: "30/05/2019", fromTime: "08.00 AM", toTime: "09.00 AM", plannedTask: "Task 1", remarks: "true 1", actualTask:""},
{ dartName: "Madhan",taskDate: "30/05/2019", fromTime: "08.00 AM", toTime: "09.00 AM", plannedTask: "Task 1", remarks: "true 1", actualTask:""},
{ dartName: "Madhan",taskDate: "30/05/2019", fromTime: "08.00 AM", toTime: "09.00 AM", plannedTask: "Task 1", remarks: "true 1", actualTask:""},
{ dartName: "Madhan",taskDate: "30/05/2019", fromTime: "08.00 AM", toTime: "09.00 AM", plannedTask: "Task 1", remarks: "true 1", actualTask:""},
{ dartName: "Madhan",taskDate: "30/05/2019", fromTime: "08.00 AM", toTime: "09.00 AM", plannedTask: "Task 1", remarks: "true 1", actualTask:""},
{ dartName: "Madhan",taskDate: "30/05/2019", fromTime: "08.00 AM", toTime: "09.00 AM", plannedTask: "Task 1", remarks: "true 1", actualTask:""}

  ]
  ngOnInit() {
  }
  onClick(name,date){
  this.dartService.getDayDart(this.dart)
    .subscribe(
      data=>
      { this.dart.dartName = name;
        this.dart.taskDate = date;
        console.log(this.dart);
        this.darts;
      }
    );
    }
  // onSubmit(actualTask) {
  //   this.dartService.updatedarts()
  //   .subscribe(data=>{
  //       console.log(this.darts);
  //       this.darts;
  //     }
  //   );
  //   console.log("Before: "+ JSON.stringify(this.darts));
  //         for (let dart of this.darts) {
  //         dart.actualTask=actualTask;
  //     }
  //           console.log("After: "+ this.darts);
  //     this.dartService.update(this.darts)
  //         .subscribe(
  //           data => console.log('success', data),
  //             error => console.error('success', error)
  //           )
  //       }

}
