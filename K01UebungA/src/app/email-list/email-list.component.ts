import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'ua-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss'],
  standalone: true,
  imports: [MatListModule, MatIconModule, NgFor, NgIf],
})
export class EmailListComponent {
  @Input() _addresses: string[] = []

  get addresses(): string[] {
    return this._addresses!;
  }
  set addresses(Addresses: string[]) {
    this._addresses = Addresses
  }
}
