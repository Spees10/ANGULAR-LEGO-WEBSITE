import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { ApiDataService } from 'src/app/Services/api-data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  ListCat:ICategory[]=[];
  constructor(private ApiProdService:ApiDataService) { }

  ngOnInit(): void {
    this.ApiProdService.GetAllCategory().subscribe(
      prodList=>{
        this.ListCat=prodList;
      }
    )
  }

}
