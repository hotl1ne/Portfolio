import { Component } from '@angular/core';

@Component({
  selector: 'app-headear',
  standalone: true,
  imports: [],
  templateUrl: './headear.component.html',
  styleUrl: './headear.component.css'
})
export class HeadearComponent {

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollToSection(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
