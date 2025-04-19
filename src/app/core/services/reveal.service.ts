import { Injectable } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Injectable({
  providedIn: 'root'
})
export class RevealService {

  constructor() { }
initScrollAnimations() {
  ScrollReveal().reveal('.reveal', {
    distance:"120px",
    origin:"bottom",
    duration:1000,
    easing: 'ease-in-out',
    reset: true,
  });
  ScrollReveal().reveal('.fade-in', {
    duration: 1000,
    origin: 'left',
    distance: '50px',
    easing: 'ease-in-out',
    reset: true
  });

  ScrollReveal().reveal('.slide-left', {
    duration: 1200,
    origin: 'left',
    distance: '100px',
    easing: 'ease-in-out',
    reset: true
  });

  ScrollReveal().reveal('.slide-right', {
    duration: 1200,
    origin: 'right',
    distance: '100px',
    easing: 'ease-in-out',
    reset: true
  });

  ScrollReveal().reveal('.zoom-in', {
    duration: 1500,
    scale: 0.85,
    easing: 'ease-in-out',
    reset: true
  });
}
}
