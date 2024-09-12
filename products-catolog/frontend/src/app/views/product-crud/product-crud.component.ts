import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-product-crud',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css'
})
export class ProductCrudComponent {

  constructor (private router: Router) { }

  ngOnInit(): void {    
  }

  navigateToProductCreate() : void {
    this.router.navigate(['products/create'])    
  }
}
