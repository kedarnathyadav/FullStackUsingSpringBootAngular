import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { error } from 'console';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {

  message: string = 'Some Welcome Message';
  welcomeMessageFromService: string = '';
  errorMessageFromService: string = '';
  name: string = '';

  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) { }

  ngOnInit() {
    // console.log(this.message)
    //  console.log( this.route. snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    // console.log("last line of getWwlcomeMessage");
    // console.log("Welcome Message");
  }

  getWelcomeMessageWithPathVariable() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanWithPathVariableService(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => {this.handleErrorResponse(error);
      }
    );
    // console.log("last line of getWwlcomeMessage");
    // console.log("Welcome Message");
  }


  handleErrorResponse(error: any) {
    this.errorMessageFromService = error.error.message;
  }

  handleSuccessfulResponse(response: any) {
    this.welcomeMessageFromService = response.message;
    // console.log(response);  
    // console.log(response.message);  
  }

}
