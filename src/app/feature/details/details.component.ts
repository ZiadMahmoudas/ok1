import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';

import { map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { CreateNodeComponent } from './create-node/create-node.component';
import { NotesService } from 'src/app/core/services/notes.service';
import { Notes } from 'src/app/core/models/notes';




@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  constructor(
    private notes:NotesService,
    private tostar:ToastrService,
  ){}
  isPopupOpenCreate = false;
  isPopupOpenDelete = false;
  isEdit = false
  allNotes = [];
  selected:Notes;
  currentId:number;
  @ViewChild(CreateNodeComponent) childComp: CreateNodeComponent;
  openPopup() {
    this.isPopupOpenCreate = true;
    this.isEdit =false;
    this.selected = {title:'',content:'',category:'',priority:'',tags:''}
  }
  closePopup() {
    this.isPopupOpenCreate = false;
  }
  onDelete(id:number){
    this.currentId = id;
    this.isPopupOpenDelete = true;
  }
  onOpenEditPopup(note: Notes) {
    this.selected = note;
    this.isEdit = true;
  }
  onUpdate(id:number){
    this.currentId = id;
    this.isEdit =true;
    this.isPopupOpenCreate = true
  this.selected = this.allNotes.find((Note:Notes)=>  Note.id === this.currentId)
  }

  closepopupDelete(){
    this.isPopupOpenDelete =false;
  }
  createNotes(){
    if (this.childComp.Notes.invalid) {
      this.tostar.warning("Enter Your Correct Data please Don't play For Disabled Input");
      return;
    }
    this.notes.CreateNewNotes(this.childComp.Notes.value)
  }
  ngOnInit() {
    setTimeout(() => {
      this.FetchNotes();
    });
  }
  FetchNotes() {
    this.notes.getNotes().pipe(
      map((res) => Object.values(res))
    ).subscribe(res => {
      this.allNotes = res;
    });
  }
onConfirmDelete(){
  this.notes.DeleteNotes(this.currentId).subscribe({
    next:()=>{
     this.tostar.success("Note Deleted Successfully");
     this.selected = this.allNotes.find((Note:Notes)=>  Note.id === this.currentId)
     this.FetchNotes()
     this.closepopupDelete();
    },
    error:(err)=>{
      console.log(err);
      if(err.status === 404 ){
         this.tostar.error("Not Found")
      }
    }
  })
}

updateNotes(){
  if (this.childComp.Notes.invalid) {
    this.tostar.warning("Enter Your Correct Data please Don't play For Disabled Input");
    return;
  }
  this.notes.updateNotes(this.currentId,this.childComp.Notes.value)

}

  createOrupdateNotes(data: Notes) {
    if (!this.isEdit) {
      this.notes.CreateNewNotes(data).subscribe({
        next: () => {
          this.tostar.success("Note created successfully.");
          this.FetchNotes();
          this.closePopup();
        },
        error: (err) => {
          console.error(err);
          this.tostar.error("Failed to create note.");
        }
      });
    } else {
      this.notes.updateNotes(this.currentId, data).subscribe({
        next: () => {
          this.tostar.success("Note updated successfully.");
          this.FetchNotes();
          this.closePopup();
        },
        error: (err) => {
          console.error(err);
          this.tostar.error("Failed to update note.");
        }
      });
    }
  }}

