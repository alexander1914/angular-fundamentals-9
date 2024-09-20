import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card';

import { ProductService } from '../product.service';
import { Product } from '../product.model';


@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, MatCardModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {

  product: Product = {
    name: '',
    price: null
  }
    
  constructor(private productService: ProductService, 
    private router: Router){ }

  ngOnInit(): void{        
  }
  
  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Produto Criado com Sucessso !")
      this.router.navigate(['/products/product'])
    })    
  }

  cancel(): void {
    this.router.navigate(['products/product'])
  }

}
