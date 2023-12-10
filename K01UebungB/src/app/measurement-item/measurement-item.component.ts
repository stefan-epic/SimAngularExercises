import { Component, Input } from '@angular/core';

@Component({
  selector: 'ua-measurement-item',
  templateUrl: './measurement-item.component.html',
  styleUrls: ['./measurement-item.component.scss']
})
export class MeasurementItemComponent {
  @Input() url?: string;
}
