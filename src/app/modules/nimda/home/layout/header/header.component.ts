import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private _userService: UserService) {

   // this.lgnService.updateLoginStatus();
  }

profReq: any;

  ngOnInit(): void {
    this.profReq = sessionStorage.getItem("_qapp_lg_ux");
    this.profReq = JSON.parse(this.profReq);
  }

  logout(){
    this._userService.logOut();

    this.router.navigate(['/auth/login']);
  }

}
