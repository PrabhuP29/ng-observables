import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  userActiveSubscription:Subscription;
  user1ActivatedIndct:boolean;
  user2ActivatedIndct:boolean;

  constructor(private userSvc:UserService){

  }

  ngOnInit(){

   this.userActiveSubscription = this.userSvc.userActivated.subscribe((id:number)=>{
      if(id===1){
        this.user1ActivatedIndct = true;
        this.user2ActivatedIndct = false;
      }else {
        this.user1ActivatedIndct = false;
        this.user2ActivatedIndct = true;
      }
    })

  }

  ngOnDestroy(){
    this.userActiveSubscription.unsubscribe();
  }

}
