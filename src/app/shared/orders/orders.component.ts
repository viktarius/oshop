import { Component, Input } from '@angular/core';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  @Input() orders;
  @Input() displayedColumns;

  date(timeStamp): string {
    const date = new Date(timeStamp);
    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
  }
}
