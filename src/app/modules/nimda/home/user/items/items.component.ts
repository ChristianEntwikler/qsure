import { AfterViewInit, Component, OnInit, ViewChild  } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

import { ItemsService } from 'src/app/services/items.service';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit,AfterViewInit{
  itemSearch: any;
  itemsFind: any;
  searcha: any;
  displayedColumns=['itemname','description','qty','amount','discount','link','itemdate'];
  
  
  dataSource=new MatTableDataSource<any>();
  constructor(
    private _itemsService: ItemsService, 
    private fb: FormBuilder, private toast: HotToastService, private router: Router){}
  
    @ViewChild(MatSort, { static: true })
    sort!: MatSort;
      @ViewChild(MatPaginator, { static: true })
    paginator!: MatPaginator;
  
      ngOnInit() {
      
       this._itemsService.fetchAllItems().subscribe((resp)=>{
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
