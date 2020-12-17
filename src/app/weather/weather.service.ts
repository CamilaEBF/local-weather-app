import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class WeatherService {

  constructor(private httpClient: HttpClient) { }
}

interface ICurrentWeatherData {
    weather: [{
      description: string,
      icon: string
    }],
    main: {
      temp: number
    },
    sys: {
      country: string
    }
    dt: number,
    name: string,
}