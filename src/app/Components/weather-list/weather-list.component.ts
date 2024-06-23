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
    { city: 'Egypt', temperature: 30 },
     { city: 'Tokyo', temperature: 9 },
  { city: 'London', temperature: 12 },
  { city: 'Paris', temperature: 15 },
  { city: 'Berlin', temperature: 18 },
  { city: 'Madrid', temperature: 22 },
  { city: 'Rome', temperature: 25 },
  { city: 'Moscow', temperature: 10 },
  { city: 'Istanbul', temperature: 12 },
  { city: 'Mumbai', temperature: 15 },
  { city: 'Bangalore', temperature: 18 },
  { city: 'Delhi', temperature: 22 },
  { city: 'Hong Kong', temperature: 25 },
  { city: 'Singapore', temperature: 15 },
  { city: 'Sydney', temperature: 20 },
  { city: 'Melbourne', temperature: 22 },
  { city: 'Perth', temperature: 25 },
  { city: 'Austria', temperature: 20 },
  { city: 'Switzerland', temperature: 22 },
  { city: 'Denmark', temperature: 25 },
  { city: 'Finland', temperature: 15 },
  { city: 'Norway', temperature: 20 },
  { city: 'Ireland', temperature: 25 },
  { city: 'Netherlands', temperature: 15 },
  { city: 'United Kingdom', temperature: 20 },
  { city: 'Australia', temperature: 22 },
    { city: 'United States', temperature: 25 },
    { city: 'Canada', temperature: 15 },
    { city: 'France', temperature: 20 },
    { city: 'Japan', temperature: 22 },

  { city: 'Brazil', temperature: 28 },
  { city: 'Australia', temperature: 18 },
  { city: 'Germany', temperature: 17 },
  { city: 'India', temperature: 32 },
  { city: 'Russia', temperature: 10 },
  { city: 'China', temperature: 26 },
  { city: 'South Africa', temperature: 24 },
  { city: 'Argentina', temperature: 19 },
  { city: 'Mexico', temperature: 27 },
  { city: 'Italy', temperature: 23 },
  { city: 'Spain', temperature: 21 },
  { city: 'United Kingdom', temperature: 16 },
  { city: 'Saudi Arabia', temperature: 35 },
  { city: 'Turkey', temperature: 29 },
  { city: 'South Korea', temperature: 20 },
  { city: 'Indonesia', temperature: 30 },
  { city: 'Nigeria', temperature: 31 },
  { city: 'Kenya', temperature: 25 },
  { city: 'Thailand', temperature: 28 },
  { city: 'Pakistan', temperature: 33 },
  { city: 'Bangladesh', temperature: 29 },
  { city: 'Vietnam', temperature: 27 },
  { city: 'Philippines', temperature: 26 },
  { city: 'Malaysia', temperature: 29 },
  { city: 'Singapore', temperature: 30 },
  { city: 'New Zealand', temperature: 17 },
  { city: 'Chile', temperature: 20 },
  { city: 'Colombia', temperature: 24 },
  { city: 'Peru', temperature: 22 },
  { city: 'Venezuela', temperature: 28 },
  { city: 'Ethiopia', temperature: 23 },
  { city: 'Ghana', temperature: 27 },
  { city: 'Morocco', temperature: 25 },
  { city: 'Algeria', temperature: 28 },
  { city: 'Sudan', temperature: 34 },
  { city: 'Ukraine', temperature: 19 },
  { city: 'Poland', temperature: 18 },
  { city: 'Netherlands', temperature: 17 },
  { city: 'Belgium', temperature: 16 },
  { city: 'Switzerland', temperature: 15 },
  { city: 'Sweden', temperature: 14 },
  { city: 'Norway', temperature: 12 },
  { city: 'Finland', temperature: 13 },
  { city: 'Denmark', temperature: 15 },
  { city: 'Greece', temperature: 27 },
  { city: 'Portugal', temperature: 23 },
  { city: 'Austria', temperature: 19 },
  { city: 'Hungary', temperature: 21 },
  { city: 'Romania', temperature: 22 },
  { city: 'Czech Republic', temperature: 20 },
  { city: 'Slovakia', temperature: 19 },
  { city: 'Bulgaria', temperature: 22 },
  { city: 'Serbia', temperature: 24 },
  { city: 'Croatia', temperature: 23 },
  { city: 'Slovenia', temperature: 21 },
  { city: 'Bosnia and Herzegovina', temperature: 22 },
  { city: 'Montenegro', temperature: 23 },
  { city: 'Macedonia', temperature: 22 },
  { city: 'Albania', temperature: 25 },
  { city: 'Kosovo', temperature: 24 },
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
