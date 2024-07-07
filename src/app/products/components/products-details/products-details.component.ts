import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent implements OnInit {
  id:any
  data:any={}
  loading:boolean=false
  constructor(private Route:ActivatedRoute,private service:ProductsService){
    this.id=this.Route.snapshot.paramMap.get("id")
  }
  ngOnInit(): void {
      this.getProduct()
  }
  getProduct(){
    this.loading=true
    this.service.getProductsById(this.id).subscribe(res=>{
      this.loading=false
      this.data=res
    },error=>{
      this.loading=false
      alert(error)
    }
    )

  }

}
