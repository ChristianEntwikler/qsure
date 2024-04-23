import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { IRoleDto, IUserDto } from 'src/app/model/iuser.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-rolesetup',
  templateUrl: './rolesetup.component.html',
  styleUrls: ['./rolesetup.component.css']
})
export class RolesetupComponent {
  constructor(private _userService: UserService, 
    private fb: FormBuilder, private toast: HotToastService, private router: Router){}
  
  fname: any;
  describe: any;
  saveResp: any;
  statusVal:any;
  
  submitData()
  {
    if(this.fname===""||this.fname===undefined)
    {
      this.toast.error("name is required");
    }
    else if(this.describe===""||this.describe===undefined)
    {
      this.toast.error("description is required");
    }
    else if(this.statusVal==="Select Option" || this.statusVal===""||this.statusVal===undefined){
      this.toast.error("Invalid status selected");
    }
    else{
  
      var newReq : IRoleDto =({} as any) as IRoleDto;
      newReq.name = this.fname;
      newReq.description = this.describe;
      newReq.status = this.statusVal;
  
      this._userService.saveRoleRequest(newReq).subscribe((resp)=>{
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
