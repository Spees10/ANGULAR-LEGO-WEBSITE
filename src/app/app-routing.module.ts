import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { BestSellerComponent } from './Components/best-seller/best-seller.component';
import { CartComponent } from './Components/cart/cart.component';
import { CategoryComponent } from './Components/category/category.component';
import { ExclusiveComponent } from './Components/exclusive/exclusive.component';
import { FilterProductComponent } from './Components/filter-product/filter-product.component';
import { FilterComponent } from './Components/filter/filter.component';
import { HomeComponent } from './Components/home/home.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';

const routes: Routes = [

  {path:'',component:MainLayoutComponent,children:[
    {path:'',redirectTo:'/home',pathMatch:'full'},
    // ,canActivate:[UserAuthGuard]
  {path:'home',component:HomeComponent},
  {path:'category',component:CategoryComponent},
 {path:'exclusive',component:ExclusiveComponent},
 {path:'aboutus',component:AboutUsComponent},
 {path:'bestseller',component:BestSellerComponent},
 {path:'filter',component:FilterComponent},
 {path:'filterPro',component:FilterProductComponent},
 {path:'cart',component:CartComponent},
 {path:'cart/:id',component:CartComponent}
 
 
  
 
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
