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
    public timeDescription: string = 'Bom dia';

    constructor(
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.user = this.authService.user;

        let date = new Date(Date.now());
        let hour = date.getHours() +''+ date.getMinutes();

        if (Number(hour) > 1800) {
            this.timeDescription = 'Boa noite';
        } else if(Number(hour) > 1200) {
            this.timeDescription = 'Boa tarde';
        }
    }

    logout() {
        this.authService.logout();
    }

    onChange(elem, menu) {
        elem.classList.toggle("change");
        menu.classList.toggle("show");
    }
}
