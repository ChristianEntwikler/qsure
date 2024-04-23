import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IClientDto } from '../model/iclient.model';
import { IChatDto, IChatMsgDto, IChatRequestDto, IChatStatusUpdate } from '../model/ichat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  readonly bUrl: string = `${environment.baseUrl}:${environment.chat}/`
  
  constructor(private httpClient: HttpClient) { }


  saveRequest(saveReq: IChatDto){  
    //console.log(saveReq);
    let httpOptions = {
      headers: new HttpHeaders({
        //'Authorization': tknIntel.toString(),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.httpClient.post(`${this.bUrl}create`, JSON.stringify(saveReq), httpOptions);
   }

   fetchChat(req: IChatRequestDto): Observable<any>{  
    //console.log(req);
    let httpOptions = {
      headers: new HttpHeaders({
        //'Authorization': tknIntel.toString(),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.httpClient.post(`${this.bUrl}fetchdetails`, JSON.stringify(req), httpOptions);
   }

   fetchMessengers(req: IChatMsgDto){  
    //console.log(req);
    let httpOptions = {
      headers: new HttpHeaders({
        //'Authorization': tknIntel.toString(),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.httpClient.post(`${this.bUrl}fetchmessenger`, JSON.stringify(req), httpOptions);
   }

   updateReadStatus(req: IChatStatusUpdate): Observable<any>{  
    //console.log(req);
    let httpOptions = {
      headers: new HttpHeaders({
        //'Authorization': tknIntel.toString(),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.httpClient.post(`${this.bUrl}updatereadstatus`, JSON.stringify(req), httpOptions);
   }

   
}
