import { Person } from './../shared/person';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ua-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.scss'],
})
export class PersonItemComponent {
  @Input() person?: Person; //Injection of Person for this Item

  constructor() {}

  get p(): Person {
    return this.person!;
  }
}
