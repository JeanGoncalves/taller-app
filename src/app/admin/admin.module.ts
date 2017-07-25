import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { AdminComponent }           from './admin.component';
import { FormsModule }              from '@angular/forms';
import { TextMaskModule }           from 'angular2-text-mask';

import { AdminRoutingModule }       from './admin-routing.module';
import { DashboardComponent }       from './dashboard/dashboard.component';
import { MyAccountComponent }       from './my-account/my-account.component';
import { MyRequestComponent }       from './my-request/my-request.component';
import { NewEnterpriseComponent }   from './new-enterprise/new-enterprise.component';
import { NewRequestComponent }      from './new-request/new-request.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    TextMaskModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    MyAccountComponent,
    MyRequestComponent,
    NewEnterpriseComponent,
    NewRequestComponent
  ],
  providers: [
    AdminComponent
  ]
})
export class AdminModule { }
