import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { LoginComponent }         from './login/login.component';
import { NewAccountComponent }    from './new-account/new-account.component';
import { NotFoundComponent }      from './not-found/not-found.component';

import { AuthGuard }              from './auth-guard.service';

const appRoutes: Routes = [
  { path: 'admin',        loadChildren: './admin/admin.module#AdminModule', canLoad: [AuthGuard] },
  { path: 'login',        component: LoginComponent },
  { path: 'new-account',  component: NewAccountComponent },
  { path: '',             redirectTo: '/login', pathMatch: 'full' },
  { path: '**',           component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}