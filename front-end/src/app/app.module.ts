import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {ContactComponent} from "./components/contact/contact.component";
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from "./services/auth.service";
import {HttpModule} from "@angular/http";
import {AccountService} from "./services/account.service";
import { ProfileComponent } from './components/profile/profile.component';
import {routing} from "./app.routing";
import {FacebookModule} from "ngx-facebook";
import {UrlPermission} from "./urlPermission/url.permission";
import {HomeComponent } from './components/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule } from './material.module';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    ProfileComponent,
    HomeComponent,
    LoginDialogComponent,
  ],
  imports: [
    BrowserModule,HttpModule,MaterialModule,FormsModule,routing, FacebookModule.forRoot(),BrowserAnimationsModule,
  ],
  providers: [AuthService,AccountService,UrlPermission],
  bootstrap: [AppComponent],
  entryComponents : [LoginDialogComponent]

})
export class AppModule { }
