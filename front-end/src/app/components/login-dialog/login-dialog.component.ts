import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginDialogComponent implements OnInit {

  constructor(private matDailogRef : MatDialogRef <LoginDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  public close() {
    this.matDailogRef.close();
  }

}
