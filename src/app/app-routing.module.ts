import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { LoginComponent }   from './login/login.component';
import { NewAccountComponent }   from './new-account/new-account.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { MyRequestComponent }   from './my-request/my-request.component';
import { NewRequestComponent }   from './new-request/new-request.component';
import { NewEnterpriseComponent }   from './new-enterprise/new-enterprise.component';
import { MyAccountComponent }   from './my-account/my-account.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'new-account', component: NewAccountComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'my-request', component: MyRequestComponent },
  { path: 'new-request', component: NewRequestComponent },
  { path: 'new-enterprise', component: NewEnterpriseComponent },
  { path: 'my-account', component: MyAccountComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
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