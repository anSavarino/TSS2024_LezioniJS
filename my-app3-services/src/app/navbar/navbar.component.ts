import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  show: boolean = false;

  constructor(private authSevice: AuthorizationService) { }


  ngOnInit(): void {
  
    if (this.authSevice.checkRole()) {
      this.show = true;
    }
  }
}
