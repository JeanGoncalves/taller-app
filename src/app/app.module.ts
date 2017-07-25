import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AuthGuard }            from './auth-guard.service';
import { AuthService }          from './auth.service';

import { EnterpriseService }    from './service/enterprise.service';
import { UserService }          from './service/user.service';
import { ProductService }       from './service/product.service';

import { LoginComponent }       from './login/login.component';
import { NewAccountComponent }  from './new-account/new-account.component';
import { NotFoundComponent }    from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewAccountComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
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
