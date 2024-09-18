import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service'; // Import the service
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { error } from 'console';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'] // Corrected to styleUrls
})
export class LoginComponent implements OnInit {

    username = '';
    password = '';
    errorMessage = 'Invalid Credentials';
    invalidLogin = false;

    constructor(private router: Router,
        private hardcodedAuthenticationService: HardcodedAuthenticationService,
        private basicAuthenticationService: BasicAuthenticationService

    ) {
    }

    ngOnInit() {
    }

    handleLogin() {
        // Use the hardcodedAuthenticationService for authentication
        if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
            // Redirect to welcome
            this.router.navigate(['welcome', this.username]);
            this.invalidLogin = false;
        } else {
            this.invalidLogin = true;
        }
    }


    handleBasicAuthLogin() {
        // Use the hardcodedAuthenticationService for authentication
        this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
            .subscribe(
                data => {
                    console.log(data)
                    // Redirect to welcome
                    this.router.navigate(['welcome', this.username]);
                    this.invalidLogin = false;
                },
                error => {
                    console.log(error)
                    this.invalidLogin = true;

                }
            )
            
        
            
       
    }
    handleJWTAuthLogin() {
        // Use the hardcodedAuthenticationService for authentication
        this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
            .subscribe(
                data => {
                    console.log(data)
                    // Redirect to welcome
                    this.router.navigate(['welcome', this.username]);
                    this.invalidLogin = false;
                },
                error => {
                    console.log(error)
                    this.invalidLogin = true;

                }
            )
            
        
            
       
    }
   
    
}

