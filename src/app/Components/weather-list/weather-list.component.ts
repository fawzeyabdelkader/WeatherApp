import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './weather-list.component.html',
  styleUrl: './weather-list.component.css',
})
export class WeatherListComponent {
  searchCity: string = '';
  sortBy: string = '';
  sortAscending: boolean = false;
  constructor(private _Router: Router) {
    this.filteredWeatherList = this.weatherList;
  }
  weatherList: any[] = [
    { city: 'new York', temperature: 20 },
    { city: 'Cairo', temperature: 30 },
    { city: 'Tokyo', temperature: 9 },
    { city: 'China', temperature: 15 },
  ];
  filteredWeatherList: any[];

  navigateToWeather(temperature: number) {
    this._Router.navigate(['/weather'], { queryParams: { temperature } });
  }

  filterWeatherList() {
    if (!this.searchCity) {
      this.filteredWeatherList = this.weatherList;
    } else {
      this.filteredWeatherList = this.weatherList.filter((cityWeather) => {
        return cityWeather.city
          .toLowerCase()
          .includes(this.searchCity.toLowerCase());
      });
      // console.log(this.filteredWeatherList);
    }
  }

  sortWeatherList(property: string) {
    this.sortBy = property;
    this.sortAscending = !this.sortAscending;
    this.filteredWeatherList.sort((a, b) => {
      const aValue = a[property];
      const bValue = b[property];
      if (aValue<bValue) {
        return this.sortAscending?-1:1;

      }
      else if (aValue>bValue)
        {
          return this.sortAscending?1:-1;
        }
        return 0;
    });
  }
}
