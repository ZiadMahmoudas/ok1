import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details.component';
import { ViewNotesComponent } from './view-notes/view-notes.component';

const routes: Routes = [
  {path:"",component:DetailsComponent},
  { path: 'view/:id',component:ViewNotesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
