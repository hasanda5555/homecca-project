import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spring boot and angular 4 secure authentication';
  static API_URL="http://localhost:8080";

  constructor(public dialog : MatDialog) {

  }

  public openLoginDialog() {
    this.dialog.open(LoginDialogComponent, {data : {name : 'Hasanda'}})
  }
}
