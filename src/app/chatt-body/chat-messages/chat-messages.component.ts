import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})
export class ChatMessagesComponent implements OnInit { 
  @Input() messages : any;
  @ViewChild('scroll') scroll!: ElementRef
  
  
  constructor() { }

  ngOnInit(): void {
  }

 
  ngOnChanges(changes: SimpleChanges) {
    if(changes)
    this.scroll.nativeElement.scrollTop = this.scroll.nativeElement.scrollHeight;
  }
 

 

}
