import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profReq: any;

  ngOnInit(): void {
    this.profReq = sessionStorage.getItem("_qapp_lg_ux");
    this.profReq = JSON.parse(this.profReq);
  }

}
