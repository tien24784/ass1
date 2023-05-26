import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  status: boolean = false;
  productName="";
  products: IProduct[]=[]
  product!:IProduct;
  constructor(private productService: ServicesService){
    this.productService.getProducts().subscribe(data =>{
      this.products = data
    },error => console.log(error)
    )
  }
  getValue(e: any){
    this.productName = e.target.value;
  }
  changeStatus(){
    this.status= !this.status;
  }
  removeItem(id:any){
    this.productService.delete(id).subscribe(()=>{
      this.products = this.products.filter(item => item.id !==id)
    },(error) =>{
      console.log(error.message)
      
    }
    )
  }
}
