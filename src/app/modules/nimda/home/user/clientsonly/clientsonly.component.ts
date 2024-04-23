import {  AfterViewInit, Component, OnInit, ViewChild  } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { ClientsService } from 'src/app/services/clients.service';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-clientsonly',
  templateUrl: './clientsonly.component.html',
  styleUrls: ['./clientsonly.component.css']
})
export class ClientsonlyComponent implements OnInit,AfterViewInit{
  itemSearch: any;
  itemsFind: any;
  searcha: any;
  displayedColumns=['name','repname','mobileno','email','startdate'];
  dataSource=new MatTableDataSource<any>();


  constructor(
    private _clientsService: ClientsService, 
    private fb: FormBuilder, private toast: HotToastService, private router: Router){}


    @ViewChild(MatSort, { static: true })
    sort!: MatSort;
      @ViewChild(MatPaginator, { static: true })
    paginator!: MatPaginator;
  
      ngOnInit() {
      
       this._clientsService.fetchAllClientsOnly().subscribe((resp)=>{
        this.itemsFind = resp;
        this.itemSearch = this.itemsFind.result;
        this.dataSource.data=this.itemSearch;
        
      }, (err)=>{console.log(err)}); 
    }

  ngAfterViewInit()
  {
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;
  }
  
  doFilter(event: any){
    console.log(event.target.value)
    this.dataSource.filter=event.target.value.trim().toLowerCase();
  }

}
