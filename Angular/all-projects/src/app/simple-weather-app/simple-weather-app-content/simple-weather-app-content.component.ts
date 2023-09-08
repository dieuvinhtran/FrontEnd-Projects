import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeatherReq } from 'src/app/model/WeatherReq';

@Component({
  selector: 'simple-weather-app-content',
  templateUrl: './simple-weather-app-content.component.html',
  styleUrls: [
    '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    './simple-weather-app-content.component.css',
  ],
})
export class SimpleWeatherAppContentComponent implements OnInit {
  @Input() weatherData!: Object;

  @Output() getData = new EventEmitter<any>();

  latitude!: number;
  longitude!: number;

  constructor() {}

  ngOnInit() {}

  onGetData(weatherReq: WeatherReq) {
    this.getData.emit(weatherReq);
  }
}
