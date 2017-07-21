import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { MyRequestComponent } from './my-request/my-request.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { NewEnterpriseComponent } from './new-enterprise/new-enterprise.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    NewAccountComponent,
    MyRequestComponent,
    NewRequestComponent,
    NewEnterpriseComponent,
    MyAccountComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
