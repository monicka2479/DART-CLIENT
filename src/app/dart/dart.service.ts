import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { Dart } from './dart';

@Injectable({
  providedIn: 'root'
})
export class DartService {

  insertUrl = 'http://localhost:3000/dart_create';
  selectUrl = 'http://localhost:3000/dart_select';
  dayDartUrl = 'http://localhost:3000/dart_selectSingle';
  updateDartUrl = 'http://localhost:3000/dart_update';
  constructor(private http: HttpClient) { }

  create(darts: Dart[]) {
    console.log(darts.length);
    console.log(this.insertUrl);
    return this.http.post<any>(this.insertUrl, darts);
  }

  getDarts(name, fromDate, toDate): Observable<any> {
    //return this.http.get(this.selectUrl);
    console.log('Name' + name);
    console.log('From date' + fromDate);
    console.log('To date' + toDate);
    //console.log('Updated user obj' + JSON.stringify(dart));
    return this.http.get<any>(this.selectUrl + "/" + name + "&" + fromDate + "&" + toDate);
  }

  getDayDart(dart: Dart): Observable<any> {
    console.log('Dart obj' + JSON.stringify(dart));
    var url = this.dayDartUrl + '/' + dart.userName + '&' + dart.taskDate;
    console.log('URL' + url);
    return this.http.get<any>(url);
  }

  updateDarts(darts: Dart[]) {
    return this.http.post<any>(this.updateDartUrl, darts);
  }
}
