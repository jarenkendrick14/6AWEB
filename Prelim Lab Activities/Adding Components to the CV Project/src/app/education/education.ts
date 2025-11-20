import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class EducationComponent {
  education = [
    {
      degree: 'Bachelor of Science in Information Technology - Specializing in Web Development',
      institution: 'Holy Angel University',
      period: '2023 - 2027',
      description: 'Focusing on software engineering, web development, and database management.'
    }
  ];
}
