import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent }           from './admin.component';
import { DashboardComponent }       from './dashboard/dashboard.component';
import { MyRequestComponent }       from './my-request/my-request.component';
import { MyAccountComponent }       from './my-account/my-account.component';
import { NewEnterpriseComponent }   from './new-enterprise/new-enterprise.component';
import { NewRequestComponent }      from './new-request/new-request.component';

import { AuthGuard }                from '../auth-guard.service';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'my-request',     component: MyRequestComponent },
          { path: 'my-account',     component: MyAccountComponent },
          { path: 'new-enterprise', component: NewEnterpriseComponent },
          { path: 'new-request',    component: NewRequestComponent },
          { path: '',               component: DashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}