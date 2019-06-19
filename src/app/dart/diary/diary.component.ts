import { Component, OnInit } from '@angular/core';
import { DartService } from '../dart.service';
import { Dart } from '../dart';
@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent {
  constructor(private dartService: DartService) { }
  actualTask: string;
  dart: any;
  darts: Dart[];
  curDate: Date = new Date();
  message: string;
  onClick(name) {
     this.dartService.getDayDart(name)
      .subscribe((data: Dart[]) => {
        this.darts = data;
        console.log(this.darts);
      });
  }
  trackByIndex(index: number, obj: any): any {
    return index;
  }

  onSubmit() {
    console.log('After: ' + JSON.stringify(this.darts));
    this.dartService.updateDarts(this.darts)
      .subscribe(
        data => this.message = data,
        error => console.error('success', error)
      )
  }
}
