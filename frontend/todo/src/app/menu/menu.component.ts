import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  // isUserLoggedIn : boolean = false;
  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService){}
  
  ngOnInit() {
        // this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }

  get isLoggedIn(): boolean {
    return this.hardcodedAuthenticationService.isUserLoggedIn();
  }
}
