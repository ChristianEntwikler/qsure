import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { IUserDto } from 'src/app/model/iuser.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor(private _userService: UserService, 
    private fb: FormBuilder, private toast: HotToastService, private router: Router){}
  
  fname: any;
  mail: any;
  phoneno: any;
  pwd: any;
  saveResp: any;
  statusVal:any;
  cpwd: any;
  usern: any;
  
  submitData()
  {
    if(this.fname===""||this.fname===undefined)
    {
      this.toast.error("name is required");
    }
    else if(this.mail===""||this.mail===undefined)
    {
      this.toast.error("email address is required");
    }
    else if(this.phoneno===""||this.phoneno===undefined)
    {
      this.toast.error("contact number is required");
    }
    else if(this.pwd===""||this.pwd===undefined)
    {
      this.toast.error("password is required");
    }
    else if(this.cpwd===""||this.cpwd===undefined)
    {
      this.toast.error("password confirmation is required");
    }
    else if(this.pwd!==this.cpwd)
    {
      this.toast.error("Wrong password confirmation provided");
    }
    else if(this.statusVal==="Select Option" || this.statusVal===""||this.statusVal===undefined){
      this.toast.error("Invalid status selected");
    }
    else{
  
      var newUser : IUserDto =({} as any) as IUserDto;
     newUser.name = this.fname;
     newUser.email = this.mail;
     newUser.mobileno = this.phoneno;
     newUser.defpwd = this.pwd;
     newUser.username = this.mail;
     newUser.status = this.statusVal;
  
      this._userService.saveRequest(newUser).subscribe((resp)=>{
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
