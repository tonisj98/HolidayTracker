import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LoginHomeComponent } from './pages/login-home/login-home.component';


export const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login-home', component: LoginHomeComponent},
];
