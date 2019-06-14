import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { VersionHistory } from './version-history'

@Injectable({
  providedIn: 'root'
})
export class VersionHistoryService {

  inserturl = "http://localhost:3000/version_insert";

  constructor(private http: HttpClient) { }
  create(history) {
    console.log(this.inserturl);
    return this.http.post<any>(this.inserturl, history);
  }
  getHistories():Observable<any>{
    return this.http.get("http://localhost:3000/version_select");
}
}
