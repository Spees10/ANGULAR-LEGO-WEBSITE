import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './Components/category/category.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FilterComponent } from './Components/filter/filter.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ExclusiveComponent } from './Components/exclusive/exclusive.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { BestSellerComponent } from './Components/best-seller/best-seller.component';
import { FilterProductComponent } from './Components/filter-product/filter-product.component';
import { CartComponent } from './Components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HeaderComponent,
    FooterComponent,
    FilterComponent,
    MainLayoutComponent,
    ExclusiveComponent,
    HomeComponent,
    AboutUsComponent,
    BestSellerComponent,
    FilterProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
