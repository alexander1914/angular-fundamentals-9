import { Component, OnInit } from '@angular/core';

import { MatCardModule } from '@angular/material/card'
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService){
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    }    
  }
  
  ngOnInit(): void {    
  }

}
