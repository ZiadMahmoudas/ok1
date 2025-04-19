import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
   isloading = new Subject();


  show() {
    this.isloading.next(true);
  }

  hide() {
    this.isloading.next(false);
  }
}
