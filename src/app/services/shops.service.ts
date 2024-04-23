import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IShopDto } from '../model/ishop.model';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {

  readonly bUrl: string = `${environment.baseUrl}:${environment.shop}/`
  
  constructor(private httpClient: HttpClient) { }

   fetchAllShops(): Observable<any[]>{
    //const loginDetails = this.loginService.getLogInDetails();
    //const tknIntel = this.loginService.getToken('PROFILE');
    

    let httpOptions = {
      headers: new HttpHeaders({
        //'Authorization': tknIntel.toString(),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
   return this.httpClient.get<any[]>(`${this.bUrl}fetchall`, httpOptions);

  };

  fetchAllShopsOnly(): Observable<any[]>{
    //const loginDetails = this.loginService.getLogInDetails();
    //const tknIntel = this.loginService.getToken('PROFILE');
    

    let httpOptions = {
      headers: new HttpHeaders({
        //'Authorization': tknIntel.toString(),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
   return this.httpClient.get<any[]>(`${this.bUrl}fetchallshoponly`, httpOptions);

  };

 

  saveRequest(saveReq: IShopDto){  
    console.log(saveReq);
    let httpOptions = {
      headers: new HttpHeaders({
        //'Authorization': tknIntel.toString(),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.httpClient.post(`${this.bUrl}create`, JSON.stringify(saveReq), httpOptions);
   };


}
