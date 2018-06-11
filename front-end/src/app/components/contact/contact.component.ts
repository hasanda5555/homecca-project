import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Message} from "../../model/model.message";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {

  message: Message = new Message();

  constructor(public accountService: AccountService) {

  }

  ngOnInit() {
  }

  sendConactMessage() {
    console.log(this.message);
    this.accountService.sendMessage(this.message).subscribe(data => {
       // this.router.navigate(['/login']);
      }, err => {
        console.log(err);
        //this.errorMessage = "username already exist";
      }
    )
  }

}
