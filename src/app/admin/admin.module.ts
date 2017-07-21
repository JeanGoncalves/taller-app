import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';

import { AdminRoutingModule }       from './admin-routing.module';
import { DashboardComponent }       from './dashboard/dashboard.component';
import { MyAccountComponent }       from './my-account/my-account.component';
import { MyRequestComponent }       from './my-request/my-request.component';
import { NewEnterpriseComponent }   from './new-enterprise/new-enterprise.component';
import { NewRequestComponent }      from './new-request/new-request.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    MyAccountComponent,
    MyRequestComponent,
    NewEnterpriseComponent,
    NewRequestComponent
  ]
})
export class AdminModule { }
