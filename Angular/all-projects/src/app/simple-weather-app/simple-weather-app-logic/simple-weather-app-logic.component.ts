import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherReq } from 'src/app/model/WeatherReq';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-simple-weather-app-logic',
  templateUrl: './simple-weather-app-logic.component.html',
  styleUrls: ['./simple-weather-app-logic.component.css'],
})
export class SimpleWeatherAppLogicComponent {
  weatherData!: Observable<any>;

  constructor(private weatherService: WeatherApiService) {}

  onGetData(weatherReq: WeatherReq) {
    this.weatherService
      .getWeatherData(weatherReq)
      .subscribe((data: Observable<any>) => {
        this.weatherData = data;
      });
  }
}
