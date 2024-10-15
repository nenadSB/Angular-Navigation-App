import { Component, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      CommonModule,RouterLink, RouterLinkActive,
      RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'treiningAngEnvironment';
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('document:click', ['$event'])
  closeMenu(event: Event) {
    const target = event.target as HTMLElement;
    const isInsideMenu = target.closest('.hamburger, .dropdown-menu');

    // Close menu if the click is outside the hamburger or dropdown menu
    if (!isInsideMenu) {
      this.menuOpen = false;
    }
  }
}
