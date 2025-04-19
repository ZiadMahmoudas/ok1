import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  standalone:true,
  imports:[RouterModule,CommonModule]
})
export class NavBarComponent {

  constructor( private router: Router,private auth:AuthService,private tostar:ToastrService) {}
  //logout
  navigateLogin(){
    this.auth.removeToken() /* */
    this.router.navigate(["/auth/login"]); /* Router */
    this.tostar.success("You have successfully logged out.") /* ToastrService */
  }

}
