import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
filterbyprice :string[]=[];
  constructor() {

   }

  ngOnInit(): void {

  }
  ngOnChange(){
    console.log("fromfiltercomponent product"+this.filterbyprice);
  }
  filteroptionbyPrice(x:number,y:number){
    this.filterbyprice.push(`from ${x} to ${y}`)

  }
  
 
 // console.log("fromfiltercomponent product"+this.filterbyprice);




}
