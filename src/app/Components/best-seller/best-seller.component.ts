import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { IProductImage } from 'src/app/Models/iproduct-image';
import { ApiDataService } from 'src/app/Services/api-data.service';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.scss']
})
export class BestSellerComponent implements OnInit {
  proListCat:IProduct[]=[];
  pro:IProduct|undefined;
  
    selectedCatID:number = 0;
    selectedQuantity:number = 0;
  allimg:IProductImage[]=[];

  private imge:IProductImage|undefined;
  constructor(private router:Router,public ApiProdService: ApiDataService) { }

  ngOnInit(): void {
    this.ApiProdService.GetAllPro().subscribe(
      prodList=>{
        this.proListCat=prodList;
      }
    )
    console.log(this.proListCat);
  }

  image(value:number){
    this.ApiProdService.GetImage().subscribe(
      prodList=>{
        this.allimg=prodList ;
      }
    )
   
    this.imge=this.allimg.find(i=>i.prodId==value);
   // console.log(this.imge);
  return this.imge?.prodImage;
  }

}
