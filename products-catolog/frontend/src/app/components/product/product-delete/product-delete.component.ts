import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';

import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product-delete',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, MatCardModule],
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css'
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    id: 1,
    name: '',
    price: null
  }
  
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id')!
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct(): void {
    this.productService.delete(this.product.id!).subscribe(product => {
      this.productService.showMessage("Produto excluído com sucesso...")
      this.router.navigate(['products/product'])
    })
  }

  cancel(): void {
    this.router.navigate(['products/product'])
  }
}
