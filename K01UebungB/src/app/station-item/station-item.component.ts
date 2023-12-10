import { Station } from './../shared/station';
import { Component, OnInit } from '@angular/core';
import { StationValley } from '../shared/station-valley';
import { Input } from '@angular/core';

@Component({
  selector: 'ua-station-item',
  templateUrl: './station-item.component.html',
  styleUrls: ['./station-item.component.scss']
})
export class StationItemComponent implements OnInit {
  @Input() station?: StationValley; //Injection of Station for this item
  public MappedMeasurments: { key: string, value: string }[] = [];

  ngOnInit(): void {
  //creating the pairs for MappedMeasurments with description, value and unit
    if (this.station) {
      this.MappedMeasurments = [
        { key: Station.descriptions['t'], value: this.station.t.toString()+Station.units['t'] },
        { key: Station.descriptions['n'], value: this.station.n.toString()+Station.units['n'] },
        { key: Station.descriptions['rh'], value: this.station.rh.toString()+Station.units['rh'] },
        { key: Station.descriptions['dd'], value: this.station.dd.toString()},
        { key: Station.descriptions['ff'], value: this.station.ff.toString()+Station.units['ff'] },
        { key: Station.descriptions['sd'], value: this.station.sd.toString()+Station.units['sd'] },
        { key: Station.descriptions['gs'], value: this.station.gs.toString()+Station.units['t'] }
      ];
    }
  }
}
