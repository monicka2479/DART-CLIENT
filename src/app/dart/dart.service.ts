import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Dart } from './dart';

@Injectable({
  providedIn: 'root'
})
export class DartService {

  url = "http://localhost:3000/enroll";
  constructor(private http: HttpClient) { }
  enroll(darts: Dart[]) {
    console.log(darts.length);
    return this.http.post<any>(this.url, darts);
  }
}
