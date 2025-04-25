import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
  standalone:true,
  imports: [CommonModule],
})
export class ThemeToggleComponent implements OnInit {
  isDarkMode = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'light') {
      this.setLightMode();
    } else {
      this.setDarkMode();
    }
  }

  toggleMode(): void {
    if (this.isDarkMode) {
      this.setDarkMode();
      this.saveMode('dark');
    } else {
      this.setLightMode();
      this.saveMode('light');
    }
  }
  setLightMode(): void {
    this.isDarkMode = true;
    this.renderer.addClass(document.body, 'light-mode');
    this.renderer.removeClass(document.body, 'dark-mode');
  }
  setDarkMode(): void {
    this.isDarkMode = false;
    this.renderer.addClass(document.body, 'dark-mode');
    this.renderer.removeClass(document.body, 'light-mode');
  }
  saveMode(mode: string): void {
    localStorage.setItem('mode', mode);
  }

}