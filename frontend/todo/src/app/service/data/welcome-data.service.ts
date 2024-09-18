import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../app.constants';

export class HelloWorldBean {
  constructor(public message: string){}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http : HttpClient
  ) { }

  executeHelloWorldBeanService(){

      return this.http.get<HelloWorldBean>('${API_URL}/hello-world-bean');

      // console.log("Execute Hello World Bean Service");
  }

  executeHelloWorldBeanWithPathVariableService(name : any){
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // let header = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })
    // console.log("Execute Hello World Bean Service");

      return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean/pathvariable/${name}`)
        // ,{headers : header});
      // return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean/pathvariable/${name}`);

  }

  // createBasicAuthenticationHttpHeader(){
  //   let username = 'in28minutes';
  //   let password = 'dummy';
  //   let basicAuthHeaderString = 'Basic '+ window.btoa(username+':'+password);
  //   return basicAuthHeaderString;
  // }
}
 