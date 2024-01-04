import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllDataService {
baseUrl:string='https://ecommerce.routemisr.com/api/v1/';
  constructor(private _HttpClient:HttpClient) { }
  getAllData(dataType:string):Observable<any>{
    return this._HttpClient.get(this.baseUrl+dataType)
  }
  getProductDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }

}
