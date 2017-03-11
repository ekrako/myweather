import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { WeatherService } from '../../app/services/weather.service';

@Component({
  selector: 'weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {
  zmw: string;
  weather: any;
  searchStr: string;
  results: any;
  location: any;
  constructor(public navCtrl: NavController, private weatherService: WeatherService) {

  }

  ngOnInit() {
    this.getDefaultLocation();
    this.weatherService.getWeather(this.zmw)
      .subscribe(weather => {
        this.weather = weather.current_observation;
      });
  }

  getDefaultLocation() {
    if (localStorage.getItem('location') !== null) {
      console.log(JSON.parse(localStorage.getItem('location')));
      this.zmw = JSON.parse(localStorage.getItem('location')).zmw;
    } else {
      this.zmw = '00000.7.40176';
    }
  }
  getQuery() {
    this.weatherService.searchCities(this.searchStr)
      .subscribe(res => {
        this.results = res.RESULTS;
      });
  }
  chooseLocation(location) {
    this.results = [];
    this.searchStr = null;
    this.weatherService.getWeather(location.zmw)
      .subscribe(weather => {
        this.weather = weather.current_observation;
      });
  }

}
