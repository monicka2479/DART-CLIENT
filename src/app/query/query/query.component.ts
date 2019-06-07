import { Component, OnInit } from '@angular/core';

import { Query } from './query';
import { QueryService } from './query.service';
@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  constructor(private queryService: QueryService) { }
  name: string;
  query: string;

  queries1= new Query();
  queries:Query[];
  ngOnInit() {

     this.queryService.getQueries()
    .subscribe(
      (data:Query[])=>
      {
        console.log(data);
        this.queries=data;
        console.log( "inside component" +this.queries);

      }
    );
  }

  trackByIndex(index: number, obj: any ): any{
    return index;
  }

  onSubmit(name, query){
    this.queries1.userName=name;
    //console.log(name);
    this.queries1.query=query;
    //console.log(query);
    console.log(this.queries1);
    this.queryService.saveQuery(this.queries1)
    .subscribe(
      data => console.log('success', data),
    error => console.error('error', error)
    )
  }
}
