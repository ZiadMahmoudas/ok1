import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Notes } from 'src/app/core/models/notes';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from 'src/app/core/services/notes.service';
import { map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { UpdateViewComponent } from './update-view/update-view.component';

@Component({
  selector: 'app-view-notes',
  templateUrl: './view-notes.component.html',
  styleUrls: ['./view-notes.component.scss']
})
export class ViewNotesComponent implements OnInit {
  note: Notes;
  selected:Notes;
  currentId:number;
  isPopupOpenDelete: boolean = false;
  noteIdToDelete: number;

  allNotes: Notes[];
  constructor(
    private route: ActivatedRoute,
    private notesService: NotesService,
    private router: Router,
    private tostar:ToastrService
  ) {}
 @ViewChild(UpdateViewComponent) childComp: UpdateViewComponent;
  ngOnInit(): void {
    setTimeout(()=>{
      const id = this.route.snapshot.paramMap.get('id');
      this.notesService.getNotes().pipe(
        map(res => Object.values(res))
      ).subscribe((notes) => {
        this.note = notes.find(n => n.id == id);
      });
    })
    setTimeout(() => {
      this.FetchNotes();
    });
  }

  onDelete(id: number) {
    this.isPopupOpenDelete = true;
    this.noteIdToDelete = id;
  }

  onConfirmDelete(id: number) {
    this.notesService.DeleteNotes(id).subscribe({
      next: () => {
        this.tostar.success('Note deleted successfully');
        this.router.navigate(['/AllRecipes']);
      },
      error: (err) => {
        console.log(err);
        this.tostar.error('Error deleting note');
      }
    });
  }

  isPopupOpenUpdate: boolean = false;
  closePopup() {
    this.isPopupOpenUpdate = false;
  }
  FetchNotes() {
    this.notesService.getNotes().pipe(
      map((res) => Object.values(res))
    ).subscribe(res => {
      this.allNotes = res;
    });
  }
  onUpdate(id:number){
    this.currentId = id;
    this.isPopupOpenUpdate = true;
    this.selected = this.allNotes.find((Note:Notes)=>  Note.id === this.currentId)
  }
  updateNotes(data: Notes){
    if (this.childComp.Notes.invalid) {
      this.tostar.warning("Enter Your Correct Data please Don't play For Disabled Input");
      return;
    }
    this.notesService.updateNotes(this.currentId, data).subscribe({
      next: () => {
        this.tostar.success("Note updated successfully.");
        const updatedNoteIndex = this.allNotes.findIndex(note => note.id === this.currentId);
        this.allNotes[updatedNoteIndex] = { ...this.allNotes[updatedNoteIndex], ...data };
        this.note = this.allNotes[updatedNoteIndex];
        this.isPopupOpenUpdate = false;
      },
      error: (err) => {
        console.error(err);
        this.tostar.error("Failed to update note.");
      }
    });
  }
}
