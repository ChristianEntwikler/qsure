import { Injectable } from '@angular/core';
import { IChatRequestDto } from '../model/ichat.model';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Subject, timer, switchMap, retry, tap, share, takeUntil, Observable } from 'rxjs';
import { ChatsService } from './chats.service';

@Injectable({
  providedIn: 'root'
})
export class ChatsreloadService {

chats: any;
chatResp: any;
chatz: any;

private stopPolling = new Subject();

  constructor(private _chatService: ChatsService,
    private fb: FormBuilder, private toast: HotToastService, private router: Router)
    {
      /* this.chatz = timer(1, 3000).pipe(
        switchMap(() => this.chatContent()),
        retry(),
        tap(console.log),
        share(),
        takeUntil(this.stopPolling)
      ); */
    }


    getAllChats(sendaa:any, recipi:any): Observable<any[]> {
      return timer(1, 3000).pipe(
        switchMap(() => this.chatContent(sendaa, recipi)),
        retry(),
        tap(console.log),
        share(),
        takeUntil(this.stopPolling)
      ).pipe(   
        tap(() => console.log('data sent to subscriber'))
      );
    }

    chatContent(senda: any, recip:any)
{
  var req : IChatRequestDto =({} as any) as IChatRequestDto;
  req.sender = senda
  req.recipient = recip;
  this._chatService.fetchChat(req).subscribe((resp)=>{
    this.chatResp=resp; this.chats = this.chatResp.result;
  //console.log(this.chats);
}, (error)=>{
    console.log('error.message: ' + error.message);
  });
  return this.chats;
}
}
