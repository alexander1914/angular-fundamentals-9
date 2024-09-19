import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

import { MatTableModule, MatTable } from '@angular/material/table';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt)

@Component({
  selector: 'app-product-read',
  standalone: true,
  imports: [MatTableModule, MatTable, CommonModule],
  providers: [{ 
    provide: LOCALE_ID,
    useValue: 'pt-PT'
  }],  
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css'
})
export class ProductReadComponent implements OnInit {

  products: Product[] = []
  displayedColumns = ['id', 'name', 'price', 'action']  

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products            
    })
  }
  
}
