import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITemDto } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  readonly bUrl: string = `${environment.baseUrl}:${environment.item}/`
  
  constructor(private httpClient: HttpClient) { }

   fetchAllItems(): Observable<any[]>{
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

  }

  searchItem(): Observable<any[]>{
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

  }

  saveRequest(saveReq: ITemDto){  
    saveReq.apilink = `${environment.apipth}/` + saveReq.shopid + '/'+ saveReq.name.replaceAll(" ", "");
    console.log(saveReq);
    let httpOptions = {
      headers: new HttpHeaders({
        //'Authorization': tknIntel.toString(),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.httpClient.post(`${this.bUrl}create`, JSON.stringify(saveReq), httpOptions);
   }
  
}
