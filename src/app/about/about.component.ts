import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(private render:Renderer2){}
  @ViewChild("popupItem")popupItem:ElementRef

  openPopup() {
    const popup = this.popupItem.nativeElement
    if (popup) {
      this.render.setStyle(popup, 'visibility', 'visible');
      this.render.setStyle(popup, 'transform', 'translate(-50%, -50%) scale(1)');
      this.render.setStyle(popup, 'top', '50%');
    }
  }
  closePopup() {
    const popup = this.popupItem.nativeElement
    if (popup) {
      this.render.setStyle(popup, 'visibility', 'hidden');
    }
  }

}
