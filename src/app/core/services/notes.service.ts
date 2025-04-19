import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Notes } from 'src/app/core/models/notes';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  url: string;
  constructor(private http:HttpClient,private tostar:ToastrService) {
    this.url = environment.baseurl;
   }
  CreateNewNotes(data:Notes){
    const url = `${this.url}notes`
   return this.http.post(url,data)
  }
  getNotes(){
    const url = `${this.url}notes`
    return this.http.get(url)
  }
  DeleteNotes(id:number | undefined){
    const url = `${this.url}notes/${id}`
    return this.http.delete(url)
  }
  updateNotes(id:number | undefined,data:Notes){
    const url = `${this.url}notes/${id}`

    return this.http.put(url,data)
  }
}
