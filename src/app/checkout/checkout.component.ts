import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartId:string='';
  constructor(private _CartService:CartService){}

  ngOnInit(): void {
      this._CartService.getCartItems().subscribe({
        next:(response)=>{
          this.cartId = response.data._id
          console.log(response.data._id)
        }
      })
  }
  payment:FormGroup = new FormGroup({
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null),
  })

  onlinePayment(payment:FormGroup){
    console.log(payment)
    this._CartService.handlePayment(this.cartId,payment.value).subscribe({
      next:(res)=>{
        if(res.status == 'success'){
          // window.location.href()
        }
        console.log(res)
      },
      error:(ree)=>{console.log(ree)},
      complete:()=>{},
    })
  }

}
