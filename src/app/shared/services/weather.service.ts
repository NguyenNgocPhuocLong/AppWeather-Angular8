import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

    return this.http.get(`${this.baseURL}${city}&units=${metric}&APPID=${this.appID}`, { headers: this.buildOptions() }).pipe((first()));
  }

  getForecast(city: string, metric: 'metric' | 'imperial' = 'metric') {
    return this.http.get(`${this.forcastURL}${city}&units=${metric}&APPID=${this.appID}`, { headers: this.buildOptions() }).pipe((first(), map((weather) => weather['list'])));
  }

  private buildOptions(): HttpHeaders {
    let header = new HttpHeaders();
    header = header.set("Content-Type", "application/json");
    header = header.set("Accept", "application/json");
    header = header.set("Access-Control-Allow-Origin", "*");
    return header;
  }

}
