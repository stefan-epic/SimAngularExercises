import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { WeatherService } from './../shared/weather-service';
import { StationValley } from '../shared/station-valley';

@Component({
  selector: 'ua-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.scss'],
  providers: [WeatherService],
})
export class StationListComponent implements OnInit {
  public stations: StationValley[] = [];
  public filteredStations: MatTableDataSource<StationValley> = new MatTableDataSource();
  public filteredStationAmount: number = 0

  //decorator to get a reference to MatSort for sorting
  @ViewChild(MatSort) sort: MatSort = new MatSort();


  //Dependecy Injecting WeatherService
  constructor(private service: WeatherService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((stations) => {
      this.stations = stations;
      this.filteredStations = new MatTableDataSource(stations); //Creating Datasource for the table and the list
      this.filteredStations.sort = this.sort; //setting the sort
      this.filteredStationAmount = this.stations.length
    });
  }

  //Filter function to filter the stations based on the input
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredStations.filter = filterValue;
    this.filteredStationAmount = this.filteredStations.filteredData.length;
  }

}
