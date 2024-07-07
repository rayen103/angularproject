import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getAllProducts(){
    return this.http.get(environment.baseApi +'products')
  }
  getAllcathegories(){
    return this.http.get ('https://fakestoreapi.com/products/categories')
  }
  getproductsByCathegorie(keyword:string){
    return this.http.get ('https://fakestoreapi.com/products/category/'+keyword)
  }
  getProductsById(id:any){
    return this.http.get('https://fakestoreapi.com/products/'+id)
  }
}
