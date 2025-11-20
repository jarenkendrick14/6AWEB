import { Component } from '@angular/core';
import { DataBindingDemoComponent } from './data-binding-demo/data-binding-demo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DataBindingDemoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'prelim_lab_data_binding';
}
