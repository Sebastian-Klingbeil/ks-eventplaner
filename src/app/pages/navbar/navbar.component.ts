import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navbarClass = 'transparent';
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.scrollY > 50) {
      this.navbarClass = 'scrolled';  // Wenn gescrollt wird, setze die Klasse auf "scrolled"
    } else {
      this.navbarClass = 'transparent';  // Wenn oben, setze die Klasse auf "transparent"
    }
  }
}
