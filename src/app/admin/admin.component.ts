import { Component, OnInit } from '@angular/core';


import { AuthService }      from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    console.warn('Init Admin Component');
  }

  logout() {
    this.authService.logout();
  }

}