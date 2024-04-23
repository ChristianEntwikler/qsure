import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { IClientDto } from 'src/app/model/iclient.model';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-createclient',
  templateUrl: './createclient.component.html',
  styleUrls: ['./createclient.component.css']
})
export class CreateclientComponent {
constructor(private _clientsService: ClientsService, 
  private fb: FormBuilder, private toast: HotToastService, private router: Router){}

cname: any;
mail: any;
phoneno: any;
repdetails: any;
saveResp: any;
statusVal:any;

submitData()
{
  if(this.cname===""||this.cname===undefined)
  {
    this.toast.error("company name is required");
  }
  else if(this.mail===""||this.mail===undefined)
  {
    this.toast.error("email address is required");
  }
  else if(this.repdetails===""||this.repdetails===undefined)
  {
    this.toast.error("representer name is required");
  }
  else if(this.statusVal==="Select Option" || this.statusVal===""||this.statusVal===undefined){
    this.toast.error("Invalid status selected");
  }
  else{

    var newUser : IClientDto =({} as any) as IClientDto;
   newUser.name = this.cname;
   newUser.email = this.mail;
   newUser.mobileno = this.phoneno;
   newUser.repname = this.repdetails;
   newUser.status = this.statusVal;

    this._clientsService.saveRequest(newUser).subscribe((resp)=>{
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
