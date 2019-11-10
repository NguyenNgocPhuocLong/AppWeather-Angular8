import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly baseURL = environment.baseURL;
  private readonly forcastURL = environment.forcastURL;
  private readonly appID = environment.appID;

  constructor(public http: HttpClient) {
  }

  getWeather(city: string, metric: 'metric' | 'imperial' = 'metric') {
    return this.http.get(`${this.baseURL}${city}&units=${metric}&APPID=${this.appID}`).pipe((first()));
  }

  getForecast(city: string, metric: 'metric' | 'imperial' = 'metric') {
    return this.http.get(`${this.forcastURL}${city}&units=${metric}&APPID=${this.appID}`).pipe((first(), map((weather) => weather['list'])));
  }

}
