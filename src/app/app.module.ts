import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { HttpModule }           from '@angular/http';
import { FormsModule, ReactiveFormsModule }          from '@angular/forms';

import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AuthGuard }            from './auth-guard.service';
import { AuthService }          from './auth.service';

import { EnterpriseService }    from './service/enterprise.service';
import { UserService }          from './service/user.service';
import { ProductService }       from './service/product.service';

import { LoginComponent }       from './login/login.component';
import { NewAccountComponent }  from './new-account/new-account.component';
import { NotFoundComponent }    from './not-found/not-found.component';

import { EqualValidator }       from './equal-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewAccountComponent,
    NotFoundComponent,
    EqualValidator
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    AuthGuard,
    AuthService,
    EnterpriseService,
    UserService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
