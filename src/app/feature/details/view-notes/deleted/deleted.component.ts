import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Notes } from 'src/app/core/models/notes';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.scss']
})
export class DeletedComponent {
  constructor() {}
  selected:any
  @Input() isPopupOpen1 = false;
   @Input() noteId: number;
   allNotes:Notes[];
   @Output()
     BTNDelted = new EventEmitter();
   @Output()
     EmitDelete = new EventEmitter<number>();
   onClose() {
    this.BTNDelted.emit();
  }
       onConfirmDelete() {
        this.EmitDelete.emit(this.noteId);
      }
}
