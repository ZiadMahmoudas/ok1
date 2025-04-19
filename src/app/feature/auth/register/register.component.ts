import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/services/auth.service';


@Component({
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule,RouterModule],
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(
    private render:Renderer2,
    private FB:FormBuilder,
    private auth:AuthService,
    private route:Router,
    private toastr: ToastrService
  ){}
  Register:FormGroup=this.FB.group({
    name:["",[Validators.required,Validators.pattern(/^[a-z ]{2,}/i)]], /* Regx */
    email:["",[Validators.required,Validators.pattern(/\w+@(gmail|mail|outlook).(com|net|org)$/i)]],
    password:["",[Validators.required,Validators.pattern(/^\w{4,}$/i)]],
    phone:["",[Validators.required]],
    age:["",[Validators.required,Validators.pattern(/^[0-9]{1,2}$/i)]],
    address:["",[Validators.required]],
  })
  get Name(){
   return this.Register.controls['name']
  }
  get Email(){
   return this.Register.controls["email"]
  }
  get password(){
   return this.Register.controls['password']
  }
  get phone(){
   return this.Register.controls['phone']
  }
  get Age(){
   return this.Register.controls['age']
  }
  get address(){
   return this.Register.controls['address']
  }

  onSumbit() {
    if (this.Register.invalid) {
      this.toastr.warning("Enter Your Correct Data please Dont play For Disabled Input");
      return;
    }

    this.auth.postReg(
      this.Register.value
   ).subscribe({
      next: (res:any) => {
        this.auth.storeToken(res.token)
        this.toastr.success("correct Data , Enter your page");
        this.route.navigate(['Home']);
      },
      error: (err) => {
        if (err.status === 400 ) {
          this.toastr.error("This Email is Already Exist");
        }
      }
    });
    this.Register.reset()
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
