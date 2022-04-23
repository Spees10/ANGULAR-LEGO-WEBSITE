import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { IProductImage } from 'src/app/Models/iproduct-image';
import { ApiDataService } from 'src/app/Services/api-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  CurrentId:number=0;
  prod:IProduct|undefined=undefined;
  prodList:IProduct[]=[];
  allimg:IProductImage[]=[];
  private imge:IProductImage|undefined;

  constructor(private activRoue:ActivatedRoute,private service:ApiDataService) { 

  }

  ngOnInit(): void {
    this.activRoue.paramMap.subscribe((paramMap)=>{
      this.CurrentId=(paramMap.get('id'))?Number(this.activRoue.snapshot.paramMap.get('id')):0;
      this.service.GetProductbyID(this.CurrentId).subscribe(
       pro=>{
         this.prod=pro;
       }
     );
 });

 this.prodList.push(this.prod!);
  }
   
  image(){
    //console.log(this.prod);
    this.service.GetImage().subscribe(
      prodList=>{
        this.allimg=prodList ;
      })
    this.imge=this.allimg.find(i=>i.prodId==this.CurrentId);
  return this.imge?.prodImage;
  }
  
}
  


  

//   this.prodIdList=this.prodService.GetProdList();
//   this.currentIndex=this.prodIdList.findIndex((item)=>item==this.CurrentId);
// this.activRoue.paramMap.subscribe((paramMap)=>{
//   this.CurrentId=(paramMap.get('proId'))?Number(this.activRoue.snapshot.paramMap.get('proId')):0;
//   let prodIdFound=this.prodService.getProdByID(this.CurrentId);
//     if(prodIdFound){
//       this.prod=prodIdFound;
//     }
//     else{
//       this.loc.back();
//     }
// })
