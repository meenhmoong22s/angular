import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { log } from 'util';

@Component({
  selector: 'app-weather-api',
  templateUrl: './weather-api.component.html',
  styleUrls: ['./weather-api.component.scss']
})
export class WeatherApiComponent implements OnInit {
  postData;
  constructor(private http: HttpClient) { }
  cityName = '';
  isLoading = false;
  temp = '';
  ngOnInit(): void
  {
  }
  getApiWeather()
  {
    this.isLoading = true;
    const url = 'https://api.openweathermap.org/data/2.5/weather?appid=154fb22a9fc8616de8a29de6231ebd5e&units=metric&q=' + this.cityName;
    this.http.get( url ).subscribe( data  =>
    {
      // console.warn( data );
      this.postData = data;
      this.isLoading = false;
      this.temp = this.postData.main.temp;
    },
      ( error ) =>
      {
        alert( 'cannot find city!' );
        this.isLoading = false;
        this.temp = '';
      }
    );
  }
  getWeather()
  {
    if (this.isLoading) {
      return 'Loading....';
    }
    if ( this.cityName === '' )
    {
      this.temp = '';
      return ('Enter your CityName');
    }
    return ( 'Weather ' + this.cityName + ' is now ' + this.temp + ' *C' );
    // tslint:disable-next-line:max-line-length
    // return this.cityName === '' ? 'Enter your Cityname' : ( 'Weather ' + this.cityName + ' is now ' + ( this.postData.main.temp ) + ' *C' );
  }
}
