import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable, map } from 'rxjs';
import { IClientDto } from 'src/app/model/iclient.model';
import { IShopDto } from 'src/app/model/ishop.model';
import { ClientsService } from 'src/app/services/clients.service';
import { ShopsService } from 'src/app/services/shops.service';

@Component({
  selector: 'app-createshop',
  templateUrl: './createshop.component.html',
  styleUrls: ['./createshop.component.css']
})
export class CreateshopComponent implements OnInit {

  constructor(private _shopsService: ShopsService, private _clientService: ClientsService,
    private fb: FormBuilder, private toast: HotToastService, private router: Router){}

    sname: any;
    addr: any;
    longt: any;
    latt: any;
    repdetails: any;
    saveResp: any;
    statusVal:any;

    clients: any;
    selectedid: any;
  
    myControl = new FormControl('');
    opts:any;
    filteredOptions: Observable<any[]> | undefined;


  ngOnInit(): void {
    this._clientService.fetchAllClientsOnly().subscribe((resp)=>{
      this.clients=resp; this.opts = this.clients.result;
    //console.log(this.clients.result);
  }, (error)=>{
      console.log('error.message: ' + error.message);
    });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      //startWith(''),
      //filter((value) => value?.length >= 3 ),
    //debounceTime(500),
      map(value => this._filter(value || '')),
      /* map(value => this._usrService.searchUser(value || '').subscribe((resp)=>{
        this.users=resp;}, (error)=>{
        console.log('error.message: ' + error.message);
      })), */
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.opts.filter((option:{name:any}) => option.name.toLowerCase().includes(filterValue));
  }

  onUserSelectionChanged(event: any) {
    //console.log(event.option.value);  
    this.selectedid = this.opts.filter((p:{name:any})=>p.name===event.option.value)[0].id;
    //console.log(this.selectedid);

  }

  submitData()
{
  if(this.sname===""||this.sname===undefined)
  {
    this.toast.error("shop name is required");
  }
  else if(this.repdetails===""||this.repdetails===undefined)
  {
    this.toast.error("representer name is required");
  }
  else if(this.addr===""||this.addr===undefined)
  {
    this.toast.error("address is required");
  }
  else if(this.longt===""||this.longt===undefined)
  {
    this.toast.error("longitude is required");
  }
  else if(this.latt===""||this.latt===undefined)
  {
    this.toast.error("lattitude is required");
  }
  else if(this.statusVal==="Select Option" || this.statusVal===""||this.statusVal===undefined){
    this.toast.error("Invalid status selected");
  }
  else{

    var newUser : IShopDto =({} as any) as IShopDto;
   newUser.clientid = this.selectedid;
   newUser.name = this.sname;
   newUser.address = this.addr;
   newUser.latitude = this.latt;
   newUser.longitude = this.longt;
   newUser.repname = this.repdetails;
   newUser.status = this.statusVal;

    this._shopsService.saveRequest(newUser).subscribe((resp)=>{
      this.saveResp=resp;  
      console.log(this.saveResp);
      setTimeout(() => {
        this.router.navigate(['/secured/dashboard'])
      }, 2000);
      this.toast.success(this.saveResp.result); 
    }, (error)=>{
      this.toast.error(this.saveResp.error);
    });

  }
}
}
