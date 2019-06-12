import { Component, OnInit } from '@angular/core';
import { DartService } from '../dart.service';
import { Dart } from '../dart';
@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent{
  constructor(private dartService: DartService) { }
  actualTask: string;
  dart: any;
  darts: Dart[];

  onClick(name, date) {
    this.dart = new Dart(name, date, '', '', '', '');
    console.log('Updated user obj' + this.dart);
    this.dartService.getDayDart(this.dart)
      .subscribe((data: Dart[]) => {
        this.darts = data;
        console.log(this.darts);
      });

  }
  // onSubmit(actualTask) {
  //   this.dartService.updatedarts()
  //   .subscribe(data=>{
  //       console.log(this.darts);
  //       this.darts;
  //     }
  //   );
  //   console.log('Before: '+ JSON.stringify(this.darts));
  //         for (let dart of this.darts) {
  //         dart.actualTask=actualTask;
  //     }
  //           console.log('After: '+ this.darts);
  //     this.dartService.update(this.darts)
  //         .subscribe(
  //           data => console.log('success', data),
  //             error => console.error('success', error)
  //           )
  //       }

}
