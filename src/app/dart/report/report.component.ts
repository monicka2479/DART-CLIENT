import { Component, OnInit } from '@angular/core';
import { DartService } from '../dart.service';
import { Dart } from '../dart';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private dartService: DartService) { }

  darts:Dart[];
  ngOnInit() {

    this.dartService.getDarts()
    .subscribe((data: Dart[]) => {
      this.darts = data;
      console.log(this.darts);
  });

  }

}
