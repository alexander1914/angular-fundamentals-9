import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button'
import { ProductReadComponent } from "../../components/product/product-read/product-read.component";
import { ProductRead2Component } from "../../components/product/product-read2/product-read2.component";
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-product-crud',
  standalone: true,
  imports: [MatButtonModule, ProductReadComponent, ProductRead2Component],
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css'
})
export class ProductCrudComponent implements OnInit {

  constructor (private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Lista de Produtos',
      icon: 'storefront',
      routeUrl: 'products/product'
    }
  }

  ngOnInit(): void {    
  }

  navigateToProductCreate() : void {
    this.router.navigate(['products/create'])    
  }
}
