import {Injectable} from '@angular/core';

import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class WeatherService{
  http:any;
  apiKey:String;
  condiontionsUrl: String;
  
  constructor(http:Http){
    this.http = http;
    this.apiKey='37d1980bf4044b77';
    this.condiontionsUrl=`https://api.wunderground.com/api/${this.apiKey}/conditions/q`;
  }
  
  getWeather(city,state){
    console.log(`${this.condiontionsUrl}/${state}/${city}.json`);
    return this.http.get(`${this.condiontionsUrl}/${state}/${city}.json`)
    .map(res => res.json());
  }
}