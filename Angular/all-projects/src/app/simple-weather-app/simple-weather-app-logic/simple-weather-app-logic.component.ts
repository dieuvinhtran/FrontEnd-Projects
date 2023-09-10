import { Component } from '@angular/core';
import { WeatherApiData, WeatherReq } from 'src/app/model/Weather';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-simple-weather-app-logic',
  templateUrl: './simple-weather-app-logic.component.html',
  styleUrls: ['./simple-weather-app-logic.component.css'],
})
export class SimpleWeatherAppLogicComponent {
  weatherData!: WeatherApiData;

  constructor(private weatherService: WeatherApiService) {}

  onGetData(weatherReq: WeatherReq) {
    this.weatherService.getWeatherData(weatherReq).subscribe((data) => {
      this.weatherData = data;
      weatherReq.callback(
        this.weatherData.location.name,
        this.weatherData.current.condition.icon,
        this.weatherData.current.temp_c
      );
    });
  }
}
