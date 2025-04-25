import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { ThemeToggleComponent } from 'src/app/shared/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  standalone:true,
  imports:[RouterModule,CommonModule,ThemeToggleComponent]
})
export class NavBarComponent {

  constructor( private router: Router,private auth:AuthService,private tostar:ToastrService) {}
  //logout
  logout(){
    this.auth.removeToken() /* */
    this.router.navigate(["/auth/login"]); /* Router */
    localStorage.removeItem("mode")
    this.tostar.success("You have successfully logged out.") /* ToastrService */
  }

}
