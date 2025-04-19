import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone:true,
})
export class FooterComponent implements OnInit {
//   /* Animation for footer  */
ngOnInit() {
  var footer = document.getElementById("footer");
  window.addEventListener("scroll",function(){
      var footerPosition = footer.getBoundingClientRect().top;
      if (footerPosition <= window.innerHeight) {
          footer.classList.add('show');
        }
        else{
          footer.classList.remove('show');
        }
  })
    }
}
