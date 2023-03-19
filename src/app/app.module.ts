import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ModelsComponent } from './models/models.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    ModelsComponent,
    NoPageFoundComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularSvgIconModule.forRoot(),
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
