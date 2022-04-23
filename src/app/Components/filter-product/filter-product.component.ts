import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { IProductImage } from 'src/app/Models/iproduct-image';
import { ApiDataService } from 'src/app/Services/api-data.service';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.scss']
})
export class FilterProductComponent implements OnInit {

  proListCat:IProduct[]=[];
pro:IProduct|undefined;

  selectedCatID:number = 0;
  selectedQuantity:number = 0;
 allimg:IProductImage[]=[];
@ViewChild(FilterComponent) filtercomponant!:FilterComponent;

private imge:IProductImage|undefined;
 filterList:string []=this.filtercomponant.filterbyprice;

  constructor(private router:Router,public ApiProdService: ApiDataService ) {

  }

   ngOnChanges(): void {

  }


  ngOnInit(): void {
    // this.proListCat=this.productservice.GetProductOfCat(this.recCatID);
    this.ApiProdService.GetAllPro().subscribe(
      prodList=>{
        this.proListCat=prodList;
      }
    )
    console.log(this.proListCat);
    console.log("fromfilter product"+this.filterList);
    

    // this.ApiProdService.GetProductbyID(2).subscribe(
    //   prodList=>{
    //     this.pro=prodList;
    //   }
    // )
    
  }

  GetDetails(prId:number){
    this.router.navigate(['products',prId]);
   // this.productservice.GetProductbyID(prId);
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

  // this.ApiProdService.GetUser().subscribe(
  //   usr=>{
  //     this.user=usr;
  //   }
  // )
  // this.us=this.user.find(x=>x.email==userName);

}

