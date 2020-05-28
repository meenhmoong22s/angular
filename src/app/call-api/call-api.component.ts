import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-call-api',
  templateUrl: './call-api.component.html',
  styleUrls: ['./call-api.component.scss']
})
export class CallApiComponent implements OnInit {
  // theo đúng thứ tự bên dưới
  postData;
  constructor(private http: HttpClient) { }
  // http: phải cách ra HttpClient
  ngOnInit(): void
  {
    this.http.get( 'http://jsonplaceholder.typicode.com/users' )
      .subscribe( result =>
    {
      // console.log( result );
        this.postData = result;
    } );
  }

}
