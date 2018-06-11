import {Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {UrlPermission} from "./urlPermission/url.permission";
import {HomeComponent} from "./components/home/home.component";
import {ContactComponent} from "./components/contact/contact.component";


const appRoutes: Routes = [
  { path: 'profile', component: ProfileComponent ,canActivate: [UrlPermission] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },

  // otherwise redirect to profile
  { path: '**', redirectTo: '/home' }
];

export const routing = RouterModule.forRoot(appRoutes);
