import { Component, OnInit }  from '@angular/core';

import { AuthService }        from '../auth.service';
import { User }               from '../model/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public user: User;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user = this.authService.user;
  }

  logout() {
    this.authService.logout();
  }

}
