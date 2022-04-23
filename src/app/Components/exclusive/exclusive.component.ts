import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { IProductImage } from 'src/app/Models/iproduct-image';
import { ApiDataService } from 'src/app/Services/api-data.service';

@Component({
  selector: 'app-exclusive',
  templateUrl: './exclusive.component.html',
  styleUrls: ['./exclusive.component.scss']
})
export class ExclusiveComponent implements OnInit {

  // constructor() { }
  // ngOnInit(): void {
  // }
  proListCat:IProduct[]=[];
pro:IProduct|undefined;

  selectedCatID:number = 0;
  selectedQuantity:number = 0;
 allimg:IProductImage[]=[];

// imge:string|undefined;
private imge:IProductImage|undefined;
  //  // category id from parent 
  //  @Input() recCatID:number = 0;

  //  @Output()  totalPriceChanged:EventEmitter<number>;

   //4

  constructor(private router:Router,public ApiProdService: ApiDataService) {

   // this.totalPriceChanged=new EventEmitter<number>();

   }


   ngOnChanges(): void {
    //  this.proListCat=this.productservice.GetProductOfCat(this.recCatID);

    // this.ApiProdService.GetProductOfCat(this.recCatID).subscribe(
    //   prodList=>{
    //     this.proListCat=prodList;
    //   }
    // )
  }


  ngOnInit(): void {
    // this.proListCat=this.productservice.GetProductOfCat(this.recCatID);
    this.ApiProdService.GetAllPro().subscribe(
      prodList=>{
        this.proListCat=prodList;
      }
    )
    console.log(this.proListCat);

    

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
