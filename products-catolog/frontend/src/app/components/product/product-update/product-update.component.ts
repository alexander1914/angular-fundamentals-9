import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card';

import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, MatCardModule],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent implements OnInit {
  
  product: Product = {
    name: '',
    price: null
  }

  constructor(
    private productService: ProductService, 
    private router: Router, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    //TODO: 
    this.productService.readById(id).subscribe(product => {
      this.product = product
    });  
  }

  updateProduct(): void {
    //this.productService.update()
  }

  cancel(): void{
    this.router.navigate(['products/product'])
  }
}
