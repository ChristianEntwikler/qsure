import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable, map } from 'rxjs';
import { IShopDto } from 'src/app/model/ishop.model';
import { ITemDto } from 'src/app/model/item.model';
import { ClientsService } from 'src/app/services/clients.service';
import { ItemsService } from 'src/app/services/items.service';
import { ShopsService } from 'src/app/services/shops.service';

@Component({
  selector: 'app-createitem',
  templateUrl: './createitem.component.html',
  styleUrls: ['./createitem.component.css']
})
export class CreateitemComponent {
  constructor(private _itemsService: ItemsService, private _shopsService: ShopsService,
    private fb: FormBuilder, private toast: HotToastService, private router: Router){}

    name: any;
    describe: any;
    amount: any;
    quantity: any;
    discount: any =0;
    links: any;

    saveResp: any;
    statusVal:any;

    clients: any;
    selectedid: any;
  
    myControl = new FormControl('');
    opts:any;
    filteredOptions: Observable<any[]> | undefined;


  ngOnInit(): void {
    this._shopsService.fetchAllShops().subscribe((resp)=>{
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
  if(this.name===""||this.name===undefined)
  {
    this.toast.error("item name is required");
  }
  else if(this.describe===""||this.describe===undefined)
  {
    this.toast.error("item description is required");
  }
  else if(this.amount===""||this.amount===undefined)
  {
    this.toast.error("amount is required");
  }
  else if(this.quantity===""||this.quantity===undefined)
  {
    this.toast.error("amount is required");
  }
  /* else if(this.discount===""||this.discount===undefined)
  {
    this.toast.error("lattitude is required");
  } */
  else if(this.statusVal==="Select Option" || this.statusVal===""||this.statusVal===undefined){
    this.toast.error("Invalid status selected");
  }
  else{

    var newUser : ITemDto =({} as any) as ITemDto;
   newUser.shopid = this.selectedid;
   newUser.name = this.name;
   newUser.description = this.describe;
   newUser.amt = this.amount.toString();
   newUser.qty = this.quantity;
   newUser.discount = this.discount;
   newUser.apilink = this.links
   newUser.status = this.statusVal;

    this._itemsService.saveRequest(newUser).subscribe((resp)=>{
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
