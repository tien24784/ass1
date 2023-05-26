import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import{ServicesService} from 'src/app/services/services.service';
import { FormBuilder,FormGroup,Form } from '@angular/forms';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  // constructor(private  FormBuilder:FormBuilder,
  //   private productService: ServicesService){}
} 
// productForm = this.FormBuilder.group({
//   name:[''],
//   price:[0],
// })
// onAdd(){
//   if(this.productForm.valid){
//     const product:IProduct={
//       name:this.productForm.value.name || "",
//       price:this.productForm.value.price ||0.
//     }
//     this.productService.addProduct(product).su
//   }
// }

