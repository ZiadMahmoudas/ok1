import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { routeGuard } from 'src/app/core/guards/route.guard';

const routes: Routes = [
  {
    path:'',children:[
  {path:'register',component:RegisterComponent,canMatch:[routeGuard]},
  {path:'login',component:LoginComponent,canMatch:[routeGuard]},]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
