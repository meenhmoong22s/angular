import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-api',
  templateUrl: './post-api.component.html',
  styleUrls: ['./post-api.component.scss']
})
export class PostApiComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(data)
  {
    const url = 'http://localhost:3000/signin';
    const headers = new Headers( { 'Content-Type': 'application/json' } );
    const body = JSON.stringify( data );
    this.http.post( url, data )
      .subscribe( ( result ) =>
      {
        console.warn( result );
      } );
    // console.warn( data );
  }

}
