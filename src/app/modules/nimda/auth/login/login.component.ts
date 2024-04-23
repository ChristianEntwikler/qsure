import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { sha512} from 'js-sha512';
import { ILoginDto } from 'src/app/model/ilogin.model';
import { IUserDto } from 'src/app/model/iuser.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

mail: any;
pintel: any;
resp: any;
saveResp: any;
respData: any;

  constructor(private _userService: UserService, 
    private fb: FormBuilder, private toast: HotToastService, private router: Router){}
  

    submitData()
  {
    if(this.mail===""||this.mail===undefined)
    {
      this.toast.error("email address is required");
    }
    else if(this.pintel===""||this.pintel===undefined)
    {
      this.toast.error("password is required");
    }
    else{
  
      var req : ILoginDto =({} as any) as ILoginDto;
      req.email = this.mail;
      req.pwd = this.pintel;
  
      this._userService.loginValidate(req).subscribe((resp)=>{
        this.saveResp=resp;  
        console.log(this.saveResp);
        setTimeout(() => {
          if(this.saveResp.result === "Successful")
          {
          sessionStorage.setItem("_qapp_lg_ux", JSON.stringify(this.saveResp) );
          this.router.navigate(['/secured/dashboard'])
          }
        }, 2000);
        this.toast.success(this.saveResp.result); 
      }, (error)=>{
        this.toast.error(this.saveResp.error);
      });
  
    }
  }
}
