import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formData!: FormGroup<any>;
  userName!: Object;
  errorMessage: boolean = false;

  constructor(private fb: FormBuilder, private service: ServicesService, private router: Router) { 
    // this.service.canLogin();
  }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.formData = this.fb.group({
      username: [''],
      passcode: [''],
    })
    
  }

  getErrorMessage(){
    this.errorMessage = false;
  }

  onSubmit(){
    const formValue = this.formData.value;
    this.service.ChatLogIn(formValue).subscribe( response => {
      this.service.setUserName(response);
      this.router.navigate(['/chat']);
    }, 
    err =>{
      this.errorMessage = true;
    })
    
 
  }
}
