import { Component } from '@angular/core';

@Component({
  selector: 'first-section',
  templateUrl: './firstsection.component.html',
  styleUrls: ['./firstsection.component.css']
})
export class FirstSection {
navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  title = 'app';
}
