import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../Models/icategory';
import { IProduct } from '../Models/iproduct';
import { IProductImage } from '../Models/iproduct-image';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private httpClient:HttpClient) { }
  GetAllCategory():Observable<ICategory[]>
   {
     return this.httpClient.get<ICategory[]>(`${environment.URLofAPIBase}/api/User/Category`);
   }

   GetAllPro():Observable<IProduct[]>
   {
     return this.httpClient.get<IProduct[]>(`${environment.URLofAPIBase}/api/Product/Product`);
   }
 
 
   GetProductOfCat(value:number):Observable<IProduct[]>{
     return this.httpClient.get<IProduct[]>(`${environment.URLofAPIBase}/api/Product?catId=${value}`);
   }
 
   GetProductbyID(value:number):Observable<IProduct>{
     return this.httpClient.get<IProduct>(`${environment.URLofAPIBase}/api/Product/ProductByID/${value}`);
   }
   GetImage():Observable<IProductImage[]>{
   // return this.httpClient.get<IProductImage>(`${environment.URLofAPIBase}/api/Product/ImgProduct?prodId=${value}`);
    return this.httpClient.get<IProductImage[]>(`${environment.URLofAPIBase}/api/Product/ImgProduct`);
  
  }
  AddToBag(pro:IProduct,count:number){

  }
}
