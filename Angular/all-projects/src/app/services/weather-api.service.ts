import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherReq } from '../model/WeatherReq';

const WEATHER_API = 'http://api.weatherapi.com/v1/current.json';
const WEATHER_API_KEY = 'b5d5be2c7f2f48ecbf2185314230908';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  constructor(private httpClient: HttpClient) {}

  getWeatherData(weatherReq: WeatherReq): Observable<any> {
    const urlParams = {
      params: new HttpParams()
        .set('key', WEATHER_API_KEY)
        .set('q', weatherReq.latitude + ',' + weatherReq.longitude),
    };

    return this.httpClient.get(WEATHER_API, urlParams);
  }
}
