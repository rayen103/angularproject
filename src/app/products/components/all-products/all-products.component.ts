import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { product } from '../../models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit {
  products:product[] = []
  cathegories:string[]=[];
  loading:boolean=false
  cartProducts:any[]=[]
  constructor(private service:ProductsService){}
  ngOnInit(): void {
    this.getproducts()
    this.getcathegories()
      
  }
  getproducts(){
    this.loading=true
    this.service.getAllProducts().subscribe((res:any)=>{
      this.products=res
      this.loading=false
  }   , error => {
    this.loading=false
    console.log(error.message)
  })


}
getcathegories(){
  this.loading=true
  this.service.getAllcathegories().subscribe((res:any)=>{
    console.log(res)
    this.cathegories=res
    this.loading=false
}   , error => {
  this.loading=false
  console.log(error.message)
})


}
filterCathegories(event:any){
  let value=event.target.value;

if(value=="all"){
  this.getproducts()
}else{
  this.getProductsCathegorie(value)
}
}
getProductsCathegorie(keyword:string){
  this.loading=true
  this.service.getproductsByCathegorie(keyword).subscribe((res:any)=>{
    this.loading=false
    this.products=res
    
  })
 

}

addToCart(event:any){
 if("cart" in localStorage){
  this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
  let exist = this.cartProducts.find(item => item.item.id == event.item.id)
  if(exist){
    alert("item already exsist in your cart")
  }else{
    this.cartProducts.push(event)
  localStorage.setItem("cart",JSON.stringify(this.cartProducts))
  }
  
 }
 else{
  this.cartProducts.push(event)
  localStorage.setItem("cart",JSON.stringify(this.cartProducts))
 }
}
}

