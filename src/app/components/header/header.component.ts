import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services';

@Component({
    selector: 'craft-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
    public currentUser: User;

    constructor() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
    }

    public fullName(): string {
        if (!this.currentUser) {
            return '';
        }
        return `${this.currentUser.firstName} ${this.currentUser.lastName}`;
    }

}
