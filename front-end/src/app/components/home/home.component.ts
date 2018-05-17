import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AccountService} from "../../services/account.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(public accountService: AccountService, public router: Router) { }

  ngOnInit() {
  }




  calculateNumbers() {
    this.accountService.addNumbers().subscribe(data => {
      console.log("calculating numbers")
        this.router.navigate(['/login']);
      }, err => {
        console.log(err);

      }
    )
  }

}
