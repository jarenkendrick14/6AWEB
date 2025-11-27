import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  // Interpolation
  studentName = "Your Name Here"; // Replace with your actual name
  score = 95;

  // Property Binding
  imageUrl = "https://picsum.photos/200";
  isDisabled = true;

  // Attribute Binding
  colSpanValue = 3;

  // Class Binding
  isPassing = true;

  // Style binding
  boxColor = "purple";
  boxSize = "150px";
}
