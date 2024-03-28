import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { SearchengineService } from 'src/app/services/searchengine.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit 
{
  itemSearch: any;
  constructor(
    private _searchService: SearchengineService, 
    private fb: FormBuilder, private toast: HotToastService, private router: Router){}
  ngOnInit() {
     this._searchService.fetchAllShop().subscribe((resp)=>{
      this.itemSearch = resp;
    }, (err)=>{console.log(err)}); 
  }

}
