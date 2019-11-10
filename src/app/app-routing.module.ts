import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent, AddComponent, DetailsComponent, HomeComponent, SignupComponent } from './pages'
import { AuthGuard, AppGuard } from './guards';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AppGuard] },
  { path: 'details/:city', component: DetailsComponent, canActivate: [AppGuard] },
  { path: 'add', component: AddComponent, canActivate: [AppGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
