import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'Angular';
  images = [ 944, 1011, 984 ].map( ( n ) => `https://picsum.photos/id/${ n }/900/500` );
  
}
