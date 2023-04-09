import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-chatt-body',
  templateUrl: './chatt-body.component.html',
  styleUrls: ['./chatt-body.component.scss']
})
export class ChattBodyComponent implements OnInit {
  formData!: FormGroup<any>;

  messages:any = [
    // {id: 1, text: "Hello", user: "me"}, 
  ];
  loader!:boolean;
 

 
  constructor(private fb: FormBuilder, private service: ServicesService, private router: Router) {
    // this.service.canLogin();
    // let userData = localStorage.getItem('user');
    // if(userData){
    //   this.router.navigate(['/chat'])
    // }
   }

  ngOnInit(): void {
    this.getMessage();
    this.initForm();
  }

  initForm(){
    this.formData = this.fb.group({
      text: ['', Validators.required],
      user: [],
    })
}

onSubmit(){
  let data: any   =  { text: this.formData.value.text, user: this.service.getUserName() };
  console.log("uname : ",this.service.getUserName())
  this.service.postMessage(data).subscribe( res => {
   this.formData.reset();
    this.getMessage();

  //   setTimeout(() => {
  //    this.getMessage();
  // }, 1000);
  },
  (err) => {
    console.log("Message not submit", err)
  })
}


getMessage(){
  this.service.getData().subscribe( res => {
    console.log("SMS", res)
    this.messages = res;
  })
  //   this.service.getData().subscribe( res => {
  //     console.log(Object(res)["data"])
  //   this.messages = Object(res)["data"];
  // })
  // this.service.getMessage().subscribe( res => {
  //   this.messages = res
  //   console.log("data", res)
  // })

  // this.service.getUserName().subscribe(res =>  console.log(Object(res)["data"]._id));
}

addEmoji(ev : any){
  console.log(ev)
}




}

