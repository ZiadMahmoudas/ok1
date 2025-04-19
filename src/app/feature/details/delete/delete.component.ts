import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
   constructor(
  ){}
   @Input() isPopupOpen1 = false;
   @Input() noteId: number;
   @Output()
     BTNDelted = new EventEmitter();
   @Output()
     EmitDelete = new EventEmitter<number>();
   onClose() {
    this.BTNDelted.emit();
  }
       onConfirmDelete(){
        this.EmitDelete.emit(this.noteId);
      }
}
