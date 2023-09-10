import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherApiData, WeatherReq } from 'src/app/model/Weather';
import { WeatherCardComponent } from '../weather-card/weather-card.component';

@Component({
  selector: 'simple-weather-app-content',
  templateUrl: './simple-weather-app-content.component.html',
  styleUrls: [
    '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    './simple-weather-app-content.component.css',
  ],
})
export class SimpleWeatherAppContentComponent implements OnInit {
  @Output() getData = new EventEmitter<any>();

  @ViewChild('weatherCardComponent', { read: ViewContainerRef })
  container!: ViewContainerRef;

  latitude!: number;
  longitude!: number;

  constructor() {}

  ngOnInit() {}

  onGetData(long: number, lat: number) {
    const weatherReqObject = {
      longitude: long,
      latitude: lat,
      callback: (city: string, icon: string, temp_c: number) =>
        this.createCard(city, icon, temp_c),
    };

    this.getData.emit(weatherReqObject);
  }

  createCard(city: string, icon: string, temp_c: number) {
    this.container.clear();
    const card = this.container.createComponent(WeatherCardComponent);
    card.instance.city = city;
    card.instance.icon = icon;
    card.instance.temp = temp_c;
  }
}
