import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Query } from './query';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private http: HttpClient) { }

  saveQuery(queries1) {
    console.log(queries1);
    return this.http.post<any>("http://localhost:3000/query_insert", queries1);
  }

  getQueries():Observable<any>{

    return this.http.get("http://localhost:3000/query_select");
}
}
