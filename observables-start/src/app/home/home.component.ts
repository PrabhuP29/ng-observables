import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Rx';
import { observable, Observer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  myNumbersSubscription:Subscription;
  myCustomSUbscription: Subscription;

  constructor() { }

  ngOnInit() {

    const myNumbers = Observable.interval(1000);
    this.myNumbersSubscription = myNumbers.subscribe((numbers:number)=>{
      console.log(numbers);
    });

    const customSubscription = Observable.create((observer:Observer<string>)=>{
      setTimeout(() => {
        observer.next("first record")
      }, 2000);
      setTimeout(() => {
        observer.next("Second record")
      }, 4000);
      // setTimeout(() => {
      //   observer.error("errored out")
      // }, 5000);
      setTimeout(() => {
        observer.complete();
      }, 8000);
      setTimeout(() => {
        observer.next("third record")
      }, 7000);

      setTimeout(() => {
        observer.next("fourth record")
      }, 9000);
    });

    this,this.myCustomSUbscription = customSubscription.subscribe((value:string)=>
    {
      console.log(value);
    })
  }

  ngOnDestroy() {
    this.myNumbersSubscription.unsubscribe();
    this.myCustomSUbscription.unsubscribe();
  }

}