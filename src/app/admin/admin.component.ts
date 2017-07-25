import { Component, OnInit } from '@angular/core';

import { AuthService }      from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public user;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user = this.authService.userLogin;
  }

  logout() {
    this.authService.logout();
  }

}
