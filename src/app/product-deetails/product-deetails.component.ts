import { Component } from '@angular/core';
import { AllDataService } from '../service/all-data.service';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
 
@Component({
  selector: 'app-product-deetails',
  templateUrl: './product-deetails.component.html',
  styleUrls: ['./product-deetails.component.scss']
})
export class ProductDeetailsComponent {
  productDetails:any;
productParamId:any;
constructor(private _ActivatedRoute:ActivatedRoute , private _AllDataService:AllDataService ){
  this._ActivatedRoute.paramMap.subscribe((param)=>{
    this.productParamId=param.get('id')
    console.log(this.productParamId)
  })
  this.getDetails();
}
getDetails(){
  this._AllDataService.getProductDetails(this.productParamId).subscribe({
    next:(response)=>{
      this.productDetails = response.data;
      // console.log(this.productDetailsArr)
    }
  })
}
// *************** owl-carousel ***********************
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: false,
  pullDrag: false,
  dots: true,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
  },
  nav: false
}

}
