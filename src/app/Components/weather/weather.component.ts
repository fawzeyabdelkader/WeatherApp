import { Component, OnInit } from '@angular/core';
import { BackGroundColorDirective } from '../../Direectives/back-ground-color.directive';
import { ActivatedRoute } from '@angular/router';
import { TemperatureConversionPipe } from '../../Pipes/temperature-conversion.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    BackGroundColorDirective,
    TemperatureConversionPipe,
    CommonModule
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent  implements OnInit{
  temperature:number=0;
  unit:string='C';
constructor(private _ActivatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this._ActivatedRoute.queryParams.subscribe(params=>{
      const temperatureParam=params['temperature'];
      if(temperatureParam)
        {
          this.temperature=+temperatureParam
        }
    });
   }

   toggleUnit(){
    this.unit=this.unit==='C'?'F':'C';

   }
}
