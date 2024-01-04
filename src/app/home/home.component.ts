import { Component, OnDestroy, OnInit } from '@angular/core';
import { AllDataService } from '../service/all-data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categoriesArr:any[]=[];
  productsDataArr:any[]=[];
  brandsArr:any[]=[];

constructor(private _AllDataService:AllDataService){}

ngOnInit(): void {
  this.getCategories()
  this.getProducts()
  // this.getBrands()
}


// getCategories function
getCategories(){
this._AllDataService.getAllData('categories').subscribe({
  next:(catData)=>{
    this.categoriesArr=catData.data;
  },
})
}
// getProducts function
getProducts(){
this._AllDataService.getAllData('products').subscribe({
  next:(productsData)=>{
    this.productsDataArr=productsData.data;
  },
})
}
// getBrands function
// getBrands(){
// this._AllDataService.getAllData('brands').subscribe({
//   next:(brandsData)=>{
//     this.brandsArr=brandsData.data.slice(0,4);
//   },
// })
// }
// *************** owl-carousel ***********************
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  autoplay:true,
  dots: true,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: false
}
}

