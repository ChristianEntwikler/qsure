import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userrole',
  templateUrl: './userrole.component.html',
  styleUrls: ['./userrole.component.css']
})
export class UserroleComponent implements OnInit,AfterViewInit{
  itemSearch: any;
  itemsFind: any;
  searcha: any;
  displayedColumns=['name','username','mobileno','email','status','datecreated','requesttype','description','logdate'];
  dataSource=new MatTableDataSource<any>();


  constructor(
    private _userService: UserService, 
    private fb: FormBuilder, private toast: HotToastService, private router: Router){}


    @ViewChild(MatSort, { static: true })
    sort!: MatSort;
      @ViewChild(MatPaginator, { static: true })
    paginator!: MatPaginator;
  
      ngOnInit() {
      
       this._userService.fetchAllUsersRoles().subscribe((resp)=>{
        this.itemsFind = resp;
        this.itemSearch = this.itemsFind.result;
        //console.log("this.itemSearch: ",this.itemSearch );
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
