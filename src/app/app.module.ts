import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { ProductsModule } from './products/products.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { LoginModule } from './login/login.module';
import { CheckOutModule } from './check-out/check-out.module';
import { CoreModule } from './core/core.module';
import { OrderSuccessModule } from './order-success/order-success.module';
import { MyOrdersModule } from './my-orders/my-orders.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    LoginModule,
    CoreModule,
    SharedModule,
    AdminModule,
    ProductsModule,
    ShoppingCartModule,
    CheckOutModule,
    OrderSuccessModule,
    MyOrdersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
