import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AppRoutingModule } from './/app-routing.module';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AuthGuard } from './guards/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './helpers/jwt'; 
import { AuthenticationService } from './services/authentication.service'
import { User } from './models/user';
import { AlertService } from './services/alert.service';
import { fakeBackendProvider } from './helpers/fake-backend';
import { AlertComponent } from './alert/alert.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileCardComponent,
    LoginFormComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [AuthGuard,
    AuthenticationService,
    AlertService,
    fakeBackendProvider,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
