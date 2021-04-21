import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { StudentLoginComponent } from './student-login/student-login.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentRegisterComponent,
    StudentLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
