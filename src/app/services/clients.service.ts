import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IClientDto } from '../model/iclient.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  readonly bUrl: string = `${environment.baseUrl}:${environment.client}/`
  
  constructor(private httpClient: HttpClient) { }

   fetchAllClients(): Observable<any[]>{
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

  fetchAllClientsOnly(): Observable<any[]>{
    //const loginDetails = this.loginService.getLogInDetails();
    //const tknIntel = this.loginService.getToken('PROFILE');
    

    let httpOptions = {
      headers: new HttpHeaders({
        //'Authorization': tknIntel.toString(),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
   return this.httpClient.get<any[]>(`${this.bUrl}fetchallclientsonly`, httpOptions);

  }

  fetchSingleClient(selectid: any): Observable<any[]>{
    //const loginDetails = this.loginService.getLogInDetails();
    //const tknIntel = this.loginService.getToken('PROFILE');
    

    let httpOptions = {
      headers: new HttpHeaders({
        //'Authorization': tknIntel.toString(),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
   return this.httpClient.get<any[]>(`${this.bUrl}fetchdetails/${selectid}`, httpOptions);

  }

  saveRequest(saveReq: IClientDto){  
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
