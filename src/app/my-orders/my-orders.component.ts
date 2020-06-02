import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from '../core/services/order.service';
import { AuthService } from '../core/services/auth.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {
  orders$: Observable<any>;
  displayedColumns: string[] = ['customer', 'date', 'view'];

  constructor(private orderService: OrderService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.orders$ = this.authService.user$
      .pipe(
        switchMap( u => this.orderService.getAllByUser(u.uid))
      );
  }
}
