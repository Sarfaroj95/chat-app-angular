import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { Socket, io } from "socket.io-client"

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  name!: string;
  userID: any;
  userName!: string;

  private scoket: any = Socket;

  // private url = "https://v1.nocodeapi.com/sarfaroj/google_sheets/SGkNoJyqyAMxWLTO?tabId=Sheet1"
  private HostUrl = "https://chatapp-delta-five.vercel.app"
  private LocalUrl =  "http://localhost:3001"
  private url = this.LocalUrl + "/api/v1/user/"

  constructor( private http: HttpClient, private router: Router) {
    // this.scoket = io(this.url)
   }

  public getData(): Observable<any[]> {
    return this.http.get<any[]>(this.url+"allmessage");
  }

  public postData(data:any): Observable<any[]> {
    return this.http.post<any[]>(this.url+"message", data);
  }

  public getUser(){
    return localStorage.getItem('user')
  }
  public logOut(){
    localStorage.removeItem('user');
    this.router.navigate(['/login'])
  }

  canLogin(){
    if(this.getData()){
      this.router.navigate(['/chat'])
    } else {
      this.router.navigate(['/login'])
    }
  }

  ChatLogIn(data:any){
    return this.http.post(this.url+"chatuserlog", data)
  }

  postMessage(data:any){
    return this.http.post(this.url+"message", data)
  }

  // getMessage(){
  //   return this.http.get(this.url1+"/messages")
  // }

  // getMessage(): Observable<any>{
  //   return new Observable(this.url1+"/messages")
  // }

  
	
	setUserName(userData:any){
    this.userNameService(userData.user_id).subscribe( res => {
      let userDetails: any = res;
      localStorage.setItem('user', userDetails.name );
    });
	}
	
	userNameService(userid: any ){
	  return this.http.get(this.url+"chatuserget/"+userid)
	}

  getUserName(){
    return this.userName;
  }

}

