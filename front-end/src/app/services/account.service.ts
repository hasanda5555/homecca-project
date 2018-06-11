import { Injectable } from '@angular/core';
import {User} from "../model/model.user";
import {Message} from "../model/model.message";
import {Http} from "@angular/http";
import {AppComponent} from "../app.component";
import {Headers, RequestOptions,Response} from '@angular/http';

@Injectable()
export class AccountService {
  constructor(public http: Http) { }

  createAccount(user:User){
    return this.http.post(AppComponent.API_URL+'/account/register',user)
      .map(resp=>resp.json());
  }

  sendMessage(message:Message){
    return this.http.post(AppComponent.API_URL+'/account/sendMessage',message)
      .map(resp=>resp.json());
  }

  addNumbers(){
    return this.http.post(AppComponent.API_URL+'/home/calculate',10)
      .map((response: Response) => {
        console.log(response)
        })
      /*.map(resp=>resp.json())
      .subscribe(
        function(response) { console.log("Success Response" + response)},
        function(error) { console.log("Error happened" + error)},
        function() { console.log("the subscription is completed")}
      );*/
  }

  getMeccaHowItWorksText(){
    return this.http.get(AppComponent.API_URL+'/home/howitworks')
      .map((response: Response) => {
        console.log(response);
        return response.text();

        })

  }


}
