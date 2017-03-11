import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { WeatherService } from '../../app/services/weather.service';

@Component({
  selector: 'weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {
  city: string;
  state: string;
  weather: any;
  searchStr: string;
  results: any;
  constructor(public navCtrl: NavController, private weatherService: WeatherService) {
    this.city = 'New_York';
    this.state = 'NY';
  }

  ngOnInit() {
    this.weatherService.getWeather(this.city, this.state)
      .subscribe(weather => {
        this.weather = weather.current_observation;
      });
  }
  getQuery() {
    this.weatherService.searchCities(this.searchStr)
      .subscribe(res => {
        this.results = res.RESULTS;
      });
  }
  chooseCity(city){
    this.results=[];
    this.searchStr=null;
    console.log(city);
  }

}
