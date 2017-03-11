import {Injectable} from '@angular/core';

import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class WeatherService{
  http:any;
  apiKey:String;
  condiontionsUrl: String;
  searchUrl: String;
  constructor(http:Http){
    this.http = http;
    this.apiKey='37d1980bf4044b77';
    this.condiontionsUrl=`https://api.wunderground.com/api/${this.apiKey}/conditions/q`;
    this.searchUrl=`/search/aq?query=`;
  }

  getWeather(city,state){
    return this.http.get(`${this.condiontionsUrl}/${state}/${city}.json`)
    .map(res => res.json());
  }
  searchCities(str){
    return this.http.get(this.searchUrl+str)
    .map(res => res.json());
  }
}
