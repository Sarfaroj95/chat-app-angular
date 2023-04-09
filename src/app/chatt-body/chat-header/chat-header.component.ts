import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.scss']
})
export class ChatHeaderComponent implements OnInit {

  user?:any;
  name?:any;
  constructor(private service: ServicesService, private router: Router) {
   
   }

  ngOnInit(): void {
      setTimeout(() => {
        this.name = this.service.getUser();
        this.user  = this.name!.slice(0, 1);
  }, 1000);
    
  }

  logOut(){
    this.service.logOut();
  }

}
