import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { AboutComponent } from './about/about.component';

import { NotFoundComponent } from './feature/not-found/not-found.component';

const routes: Routes = [
  {path:"",redirectTo:"Home",pathMatch:"full"},
  {path:"Home",loadChildren:()=>import("../app/home/home.module").then(m=> m.HomeModule),canActivate:[authGuard]},
  {path:"AllRecipes",loadChildren:()=>import("../app/feature/details/details.module").then(m=>m.DetailsModule),canActivate:[authGuard]},
  {path:"About",component:AboutComponent,canActivate:[authGuard]},
  {path:"auth", loadChildren:()=>import("./feature/auth/auth.module").then(m=>m.AuthModule)},
    {path:"**",component:NotFoundComponent},
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
