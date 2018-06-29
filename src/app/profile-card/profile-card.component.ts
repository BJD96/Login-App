import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';
import { pop} from '../animations';
import { opa} from '../animations';


@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
  animations: [opa()],
  host: {'[@opa]': ''}
})



export class ProfileCardComponent implements OnInit {
  currentUser: User; 

  constructor(private router: Router, 
    private authenticationService: AuthenticationService,
) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));      
  }
  loading: boolean = false;

  ngOnInit() {
  }
  logOut(){
    this.loading = true;
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
