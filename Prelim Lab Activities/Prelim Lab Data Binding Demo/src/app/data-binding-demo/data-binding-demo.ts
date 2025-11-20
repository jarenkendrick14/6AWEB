import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-binding-demo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './data-binding-demo.html',
  styleUrl: './data-binding-demo.css'
})
export class DataBindingDemoComponent {

  // --- Text Interpolation ---
  message = "Data Binding Demonstration";
  title = "Jaren's First App!";
  description = "This is my new Angular Application";

  // --- Property Binding ---
  imageUrl = '/assets/angular_logo.png';

  w = 150;
  h = 150;
  altText = 'Angular Logo';

  // --- Style Binding ---
  textColor = 'blue';

  // --- Class Binding ---
  isHighlighted = true;

  // --- Two-Way Data Binding ---
  yourName = '';

  // --- Event Binding ---
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
