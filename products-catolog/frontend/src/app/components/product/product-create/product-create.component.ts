import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button'
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {
    
  constructor(private producService: ProductService, 
    private router: Router){ }

  ngOnInit(): void{        
  }
  
  createProduct(): void {
    this.producService.showMessage("Testando a minha service...")
  }

  cancel(): void {
    this.router.navigate(['products/product'])
  }

}
