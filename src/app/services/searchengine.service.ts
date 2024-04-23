import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchengineService {

  readonly bUrl: string = `${environment.baseUrl}:${environment.shop}/`
  
  constructor(private httpClient: HttpClient) { }

   fetchAllShop(): Observable<any[]>{
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

  searchShopItems(req: string): Observable<any[]>{
    //const loginDetails = this.loginService.getLogInDetails();
    //const tknIntel = this.loginService.getToken('PROFILE');
    

    let httpOptions = {
      headers: new HttpHeaders({
        //'Authorization': tknIntel.toString(),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
   return this.httpClient.get<any[]>(`${this.bUrl}fetchshop/${req}`, httpOptions);

  };
}
