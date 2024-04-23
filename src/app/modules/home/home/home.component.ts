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
  reqi: any='';
  itemSearch: any;
  itemsFind: any;
  constructor(
    private _searchService: SearchengineService, 
    private fb: FormBuilder, private toast: HotToastService, private router: Router){}
  ngOnInit() {
     this._searchService.fetchAllShop().subscribe((resp)=>{
      this.itemsFind = resp;
      this.itemSearch = this.itemsFind.result.filter((p:{items_name:any})=>p.items_name!=null);
      //this.itemSearch = this._replacer(this.itemsFind.result);
      //console.log(this.itemSearch)
      
      console.log(this.itemSearch)
      
    }, (err)=>{console.log(err)}); 
  }

  searcher()
  {
    this._searchService.searchShopItems(this.reqi).subscribe((resp)=>{
      this.itemsFind = resp;
      this.itemSearch = this.itemsFind.result.filter((p:{items_name:any})=>p.items_name!=null);
      //this.itemSearch = this._replacer(this.itemsFind.result);
      //console.log(this.itemSearch)
      
      console.log(this.itemSearch)
      
    }, (err)=>{console.log(err)}); 
  }


  openForm() {
    const ne1 = document.getElementById('myForm');
    if(ne1 != null)
      {
      ne1.style.display = 'block';
      }
    //document.getElementById("myForm").style.display = "block";
  }
  
  closeForm() {
    const ne1 = document.getElementById('myForm');
    if(ne1 != null)
      {
      ne1.style.display = 'none';
      }
    //document.getElementById("myForm").style.display = "none";
  }

}
