import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2><i class="info-icon"></i> About</h2>
    <h3>{{ 'About This Portal' | uppercase }}</h3>
    <p>This is a sample Angular 21 SPA demonstrating routing, shared services, observables, and pipes.</p>
    <hr>
    <p><strong>Today:</strong> {{ today | date:'fullDate' }}</p>
  `
})
export class AboutComponent {
  today = new Date();
}
