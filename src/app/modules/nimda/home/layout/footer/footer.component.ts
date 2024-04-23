import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable, Subscription, interval, map, startWith, switchMap } from 'rxjs';
import { IChatDto, IChatMsgDto, IChatRequestDto, IChatStatusUpdate } from 'src/app/model/ichat.model';
import { ChatsService } from 'src/app/services/chats.service';
import { ChatsreloadService } from 'src/app/services/chatsreload.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {
  
  curryr: number = new Date().getFullYear();

  constructor(private _userService: UserService, private _chatService: ChatsService,
    private _chatreload: ChatsreloadService,
    private fb: FormBuilder, private toast: HotToastService, private router: Router)
    { }

  saveResp: any;
    statusVal:any;

    users: any;
    selectedid: any;
    recipName: any;
    msg: any;
    profReq: any;
    chats: any;
    chatResp: any;
    msgr: any;
    msgrResp: any;
    refMsg: any;
    msgCounta: any;
    userSearch: any;
    userSingle: any;
  
    myControl = new FormControl('');
    opts:any;
    filteredOptions: Observable<any[]> | undefined;

    timeInterval: Subscription = new Subscription;
    

    ngOnInit(): void {
    this.profReq = sessionStorage.getItem("_qapp_lg_ux");
    this.profReq = JSON.parse(this.profReq);

      this._userService.fetchAllUsersOnly().subscribe((resp)=>{
        this.users=resp; this.opts = this.users.result;
    }, (error)=>{
        console.log('error.message: ' + error.message);
      });
  

      var reqs : IChatMsgDto =({} as any) as IChatMsgDto;
      reqs.email = this.profReq.username;      
      this.timeInterval = interval(5000).pipe(startWith(0), switchMap(()=>
      this._chatService.fetchMessengers(reqs))).subscribe((resp)=>{
        this.msgrResp=resp; this.msgr = this.msgrResp.result;
    }, (error)=>{
        console.log('error.message: ' + error.message);
      });
  

      if(this.selectedid!=='' && this.selectedid !== undefined)
        {
      var req : IChatRequestDto =({} as any) as IChatRequestDto;
  req.sender = this.profReq.username;
  req.recipient = this.selectedid;
  this.timeInterval = interval(5000).pipe(startWith(0), switchMap(()=>
  this._chatService.fetchChat(req))).subscribe((resp)=>{
    this.chatResp=resp; this.chats = this.chatResp.result;
}, (error)=>{
    console.log('error.message: ' + error.message);
  });
}

      this.filteredOptions = this.myControl.valueChanges.pipe(
        //startWith(''),
        //filter((value) => value?.length >= 3 ),
      //debounceTime(500),
        map(value => this._filter(value || '')),
        /* map(value => this._usrService.searchUser(value || '').subscribe((resp)=>{
          this.users=resp;}, (error)=>{
          console.log('error.message: ' + error.message);
        })), */
      );
    }

    ngOnDestroy(): void {
    this.timeInterval.unsubscribe();
  }
  
    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
      return this.opts.filter((option:{name:any}) => option.name.toLowerCase().includes(filterValue) && option.name !== this.profReq.name);
    }

    
    onUserSelectionChanged(event: any) { 
      this.recipName = event.option.value;
      this.selectedid = this.opts.filter((p:{name:any})=>p.name===event.option.value)[0].username;
      this.chatContent();
    }
  openForm() {
    const ne1 = document.getElementById('myForm');
    if(ne1 != null)
      {
      ne1.style.display = 'block';
      }
  }
  
  closeForm() {
    const ne1 = document.getElementById('myForm');
    if(ne1 != null)
      {
      ne1.style.display = 'none';
      }
  }

  sendChat()
{
  if(this.msg===""||this.msg===undefined)
  {
    this.toast.error("message is required");
  }
  else if(this.selectedid===""||this.selectedid===undefined)
  {
    this.toast.error("recipient is required");
  }
  else{

    var newUser : IChatDto =({} as any) as IChatDto;
   newUser.message = this.msg;
   newUser.reqid = this.profReq.username + this.selectedid;
   newUser.sender = this.profReq.username ;
   newUser.recipient = this.selectedid;
   newUser.status = 'Y';

    this._chatService.saveRequest(newUser).subscribe((resp)=>{
      this.saveResp=resp;  
      setTimeout(() => {
        this.chatContent();
      }, 2000);
      this.msg = '';
    }, (error)=>{
      
      this.toast.error(this.saveResp.error);
    });

  }
}

 chatContent()
{
  var req : IChatRequestDto =({} as any) as IChatRequestDto;
  req.sender = this.profReq.username;
  req.recipient = this.selectedid;
  this.timeInterval = interval(5000).pipe(startWith(0), switchMap(()=>
  this._chatService.fetchChat(req))).subscribe((resp)=>{
    this.chatResp=resp; this.chats = this.chatResp.result;
    //setTimeout(() => {
      this.updateReadStatus();
      
   // }, 2000);
}, (error)=>{
    console.log('error.message: ' + error.message);
  });
} 

updateReadStatus()
{
  if(this.selectedid!=='' && this.selectedid !== undefined)
    {
  var req : IChatStatusUpdate =({} as any) as IChatStatusUpdate;
  req.recipient = this.profReq.username;
  req.sender = this.selectedid;
  req.status = 'Y';
  this._chatService.updateReadStatus(req).subscribe((resp)=>{
    //this.chatResp=resp; this.chats = this.chatResp.result;
}, (error)=>{
    console.log('error.message: ' + error.message);
  });
}
}

selectUser(mg:any)
{
  this.selectedid = mg.recipient;

  this.chatContent();

  //this.recipName = mg.recipient;
  /* var req : IChatRequestDto =({} as any) as IChatRequestDto;
  req.sender = this.profReq.username;
  req.recipient = this.selectedid;
  this._chatService.fetchChat(req).subscribe((resp)=>{
    this.chatResp=resp; this.chats = this.chatResp.result;
  //console.log(this.chats);
}, (error)=>{
    console.log('error.message: ' + error.message);
  }); */

  this._userService.fetchSingleUserOnly(mg.recipient).subscribe((resp)=>{
    this.userSearch=resp; this.userSingle = this.userSearch.result;
    this.recipName = this.userSingle.name;
  //console.log(this.chats);
}, (error)=>{
    console.log('error.message: ' + error.message);
  });

  
}


}
