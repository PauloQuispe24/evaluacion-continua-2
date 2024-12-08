import { Routes } from '@angular/router';
import { TruncateComponent } from './truncate/truncate.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: "truncate", component: TruncateComponent },
  { path: "home", component: HomeComponent },
  { path: "profile", component: ProfileComponent, canActivate: [authGuard] },
  { path: "login", component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
