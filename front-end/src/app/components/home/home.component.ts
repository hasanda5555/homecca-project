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

  public howItWorksText: string = "";
  btnText: string = 'Add an Item';    // Add this line
  constructor(public accountService: AccountService, public router: Router) { }

  ngOnInit() {
    this.getHowMeccaWorksText();
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

  getHowMeccaWorksText(){
    this.btnText = "mee";
    this.accountService.getMeccaHowItWorksText().subscribe(data => {
      this.howItWorksText = data;
      this.btnText = data;
      console.log(data)
      }
    )


  }
 
}
