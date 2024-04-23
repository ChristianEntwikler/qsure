import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IRoleDto, IUserDto } from '../model/iuser.model';
import { sha512} from 'js-sha512';
import { ILoginDto } from '../model/ilogin.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly bUrl: string = `${environment.baseUrl}:${environment.user}/`
  
  constructor(private httpClient: HttpClient) { }

   fetchAllUsers(): Observable<any[]>{
    //const loginDetails = this.loginService.getLogInDetails();
    //const tknIntel = this.loginService.getToken('PROFILE');
    

    let httpOptions = {
      headers: new HttpHeaders({
        //'Authorization': tknIntel.toString(),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
   return this.httpClient.get<any[]>(`${this.bUrl}user/fetchall`, httpOptions);

  }

  fetchAllUsersLogs(): Observable<any[]>{
    //const loginDetails = this.loginService.getLogInDetails();
    //const tknIntel = this.loginService.getToken('PROFILE');
    

    let httpOptions = {
      headers: new HttpHeaders({
        //'Authorization': tknIntel.toString(),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
   return this.httpClient.get<any[]>(`${this.bUrl}user/fetchalluserlogs`, httpOptions);

  }

  fetchAllUsersRoles(): Observable<any[]>{
    //const loginDetails = this.loginService.getLogInDetails();
    //const tknIntel = this.loginService.getToken('PROFILE');
    

    let httpOptions = {
      headers: new HttpHeaders({
        //'Authorization': tknIntel.toString(),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
   return this.httpClient.get<any[]>(`${this.bUrl}user/fetchallusersonly`, httpOptions);

  }

  fetchAllUsersOnly(): Observable<any[]>{
    //const loginDetails = this.loginService.getLogInDetails();
    //const tknIntel = this.loginService.getToken('PROFILE');
    

    let httpOptions = {
      headers: new HttpHeaders({
        //'Authorization': tknIntel.toString(),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
   return this.httpClient.get<any[]>(`${this.bUrl}user/fetchallusersonly`, httpOptions);

  }

  fetchSingleUser(selectid: any): Observable<any[]>{
    //const loginDetails = this.loginService.getLogInDetails();
    //const tknIntel = this.loginService.getToken('PROFILE');
    

    let httpOptions = {
      headers: new HttpHeaders({
        //'Authorization': tknIntel.toString(),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
   return this.httpClient.get<any[]>(`${this.bUrl}user/fetchdetails/${selectid}`, httpOptions);

  }

  fetchSingleUserOnly(selectid: any): Observable<any[]>{
    //const loginDetails = this.loginService.getLogInDetails();
    //const tknIntel = this.loginService.getToken('PROFILE');
    

    let httpOptions = {
      headers: new HttpHeaders({
        //'Authorization': tknIntel.toString(),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
   return this.httpClient.get<any[]>(`${this.bUrl}user/fetchuseronlydetails/${selectid}`, httpOptions);

  }

  saveRequest(saveReq: IUserDto){  
    saveReq.defpwd = sha512(saveReq.defpwd);
    console.log(saveReq);
    let httpOptions = {
      headers: new HttpHeaders({
        //'Authorization': tknIntel.toString(),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.httpClient.post(`${this.bUrl}user/create`, JSON.stringify(saveReq), httpOptions);
   }

   saveRoleRequest(saveReq: IRoleDto){  
    //console.log(saveReq);
    let httpOptions = {
      headers: new HttpHeaders({
        //'Authorization': tknIntel.toString(),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.httpClient.post(`${this.bUrl}role/create`, JSON.stringify(saveReq), httpOptions);
   }


   loginValidate(req: ILoginDto){  
    req.pwd = sha512(req.pwd);
    console.log(req);
    let httpOptions = {
      headers: new HttpHeaders({
        //'Authorization': tknIntel.toString(),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.httpClient.post(`${this.bUrl}user/login`, JSON.stringify(req), httpOptions);
   }

   logOut(){
    sessionStorage.clear();
    //this.userLoggedIn$.next(null);

  }
}
