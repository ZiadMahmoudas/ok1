import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RevealService } from '../core/services/reveal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone:true
})
export class HomeComponent {
  constructor(private router: Router,private scrollReveal:RevealService) {}
  navigateDetails(){
    this.router.navigate(['/AllRecipes']);
  }
  ngOnInit() {
    this.scrollReveal.initScrollAnimations();
  }
}
