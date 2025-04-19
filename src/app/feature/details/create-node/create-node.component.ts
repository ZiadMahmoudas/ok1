import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { Notes } from 'src/app/core/models/notes';

@Component({
  selector: 'app-create-node',
  templateUrl: './create-node.component.html',
  styleUrls: ['./create-node.component.scss']
})
export class CreateNodeComponent implements OnInit {
   constructor(
    private FB:FormBuilder,

  ){}
   Notes:FormGroup = this.FB.group({
    title:["",[Validators.required]],
    content:["",[Validators.required]],
    category:["",[Validators.required]],
    priority:["",[Validators.required,Validators.pattern(/\b(hard|easy|medium)\b/i)]],
    tags:["",[Validators.required]],
   })
   get title() {
    return this.Notes.controls["title"];
  }
  get content() {
    return this.Notes.controls["content"];
  }
  get category() {
    return this.Notes.controls["category"];
  }
  get priority() {
    return this.Notes.controls["priority"];
  }
  get tags() {
    return this.Notes.controls["tags"];
  }

  @Output()
  closePopup = new EventEmitter();
  onClose() {
    this.closePopup.emit();
  }
  @Output()
  EmitNote: EventEmitter<Notes> = new EventEmitter<Notes>();
   @Input() isEdit = false
   @Input() selected:Notes
   ngOnInit(): void {
    setTimeout(()=>{
      this.Notes.patchValue(this.selected)
    },500)
   }
  onSumbit(){
    if (this.Notes.invalid) return;
    this.onClose();
    this.EmitNote.emit(this.Notes.value)
  }

  }

