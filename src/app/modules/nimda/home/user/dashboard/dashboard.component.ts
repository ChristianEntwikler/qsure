import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { ClientsService } from 'src/app/services/clients.service';
import { ItemsService } from 'src/app/services/items.service';
import { ShopsService } from 'src/app/services/shops.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
 constructor(private _clientsService: ClientsService, private _shopsService: ShopsService, 
  private _itemsService: ItemsService, private fb: FormBuilder, private toast: HotToastService, private router: Router){}

 clients: any;
 shops: any;
 items: any;

 clientcount: any;
 shopcount: any;
 itemcount: any;


  ngOnInit(): void {

    this._clientsService.fetchAllClientsOnly().subscribe((resp)=>{
      this.clients = resp;
      this.clientcount = this.clients.result.length; 
    }, (err)=>{console.log(err)}); 

    this._shopsService.fetchAllShopsOnly().subscribe((resp)=>{
      this.shops = resp;
      this.shopcount = this.shops.result.length;    
    }, (err)=>{console.log(err)}); 


    this._itemsService.fetchAllItems().subscribe((resp)=>{
      this.items = resp;
      this.itemcount = this.items.result.length;     
    }, (err)=>{console.log(err)}); 
  }

}
