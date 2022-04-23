import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { IProductImage } from 'src/app/Models/iproduct-image';
import { ApiDataService } from 'src/app/Services/api-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  proListCat:IProduct[]=[];
pro:IProduct|undefined;

  selectedCatID:number = 0;
  selectedQuantity:number = 0;

  allimg:IProductImage[]=[];

  private imge:IProductImage|undefined;

  constructor(private router:Router,public ApiProdService: ApiDataService,private route:Router) { }

  ngOnInit(): void {
    this.ApiProdService.GetAllPro().subscribe(
      prodList=>{
        this.proListCat=prodList;
      }
    )
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
AddtoCart(id:number){
  this.route.navigate(['cart',id]);
}

}
