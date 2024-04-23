import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private router: Router, private _userService: UserService) {

    // this.lgnService.updateLoginStatus();
   }

  logout(){
    this._userService.logOut();

    this.router.navigate(['/auth/login']);
  }
}
