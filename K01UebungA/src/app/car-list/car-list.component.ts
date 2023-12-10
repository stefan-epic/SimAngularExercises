import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { NgIf, NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Component, Input } from '@angular/core';
import { Car } from '../shared/car';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'ua-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatIconModule, NgIf, NgFor, MatListModule, MatInputModule, MatFormFieldModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule]
})
export class CarListComponent {
  @Input() _cars: Array<Car> = [];
  filterYear = new FormControl('');

  //Filtering on the cars via getter
  get cars(): Array<Car> {
    return this._cars.filter((car) =>
      car.registrationyear.toString().includes(this.filterYear.value!) || this.filterYear.value === ''
    );
  }
  set cars(addresses: Array<Car>) {
    this._cars = addresses;
  }


}
