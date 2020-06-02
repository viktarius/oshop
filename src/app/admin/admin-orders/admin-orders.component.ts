import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../core/services/order.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit {
  orders$: Observable<any>;
  displayedColumns: string[] = ['customer', 'date', 'view'];

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.orders$ = this.orderService.getAll();
  }
}
