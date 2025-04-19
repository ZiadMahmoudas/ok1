import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  standalone:true,
  selector: 'app-login',
  imports:[ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
constructor(
  private fb:FormBuilder,
  private render: Renderer2,
  private toastr:ToastrService,
  private auth:AuthService,
  private route:Router
){}

loginForm:FormGroup = this.fb.group({
  email:['',[Validators.required,Validators.pattern(/\w+@(gmail|mail|outlook).(com|net|org)$/i)]],
  password:['',[Validators.required,Validators.pattern(/^\w{4,}$/i)]]
})
get email(){
  return this.loginForm.controls['email']
}
get password(){
  return this.loginForm.controls['password']
}

sumbit(){
  if (this.loginForm.invalid) {
    this.toastr.warning("Enter Your Correct Data please Dont play For Disabled Input");
    return;
  }
  this.auth.postLog(this.loginForm.value).subscribe({
    next:(res:any)=>{
      this.auth.storeToken(res.token)
      this.toastr.success("correct Data , Enter your page");
      this.route.navigate(['Home']);
    },
    error:(err:any)=>{
    }
  })
}
@ViewChild("btneye1") btn: ElementRef
@ViewChild('passwordInput') passwordInput: ElementRef;
appear(){
  const passwordField = this.passwordInput.nativeElement;
  const eyeIcon = this.btn.nativeElement;
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    this.render.addClass(eyeIcon, 'bi-eye-slash-fill');
    this.render.removeClass(eyeIcon, 'bi-eye-fill');
  } else {
    passwordField.type = 'password';
    this.render.addClass(eyeIcon, 'bi-eye-fill');
    this.render.removeClass(eyeIcon, 'bi-eye-slash-fill');
  }
}


}

