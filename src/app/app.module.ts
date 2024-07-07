import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module'; // Import ProductsModule
import { FormsModule } from '@angular/forms';
import { CartsModule } from './carts/carts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule ,
    FormsModule,
    CartsModule// Include ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
