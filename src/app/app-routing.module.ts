import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component'
import { ProfileCardComponent } from './profile-card/profile-card.component'
import {AuthGuard } from './guards/auth.guard';



const routes: Routes = [
  { path: 'login', component: LoginFormComponent,  },
  { path: 'profile', component: ProfileCardComponent,canActivate: [AuthGuard]  }, 
  { path: '**', redirectTo: 'profile' }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
