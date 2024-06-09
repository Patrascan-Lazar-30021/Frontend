import { Component, OnInit } from '@angular/core';
import { MainService, AirQuality } from './service/main.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  airQualityData: AirQuality[] = [];

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.mainService.getAirQualityData().subscribe((data) => {
      this.airQualityData = data;
    });
  }
}
