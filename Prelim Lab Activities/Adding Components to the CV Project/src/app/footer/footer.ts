import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  technicalProficiencies = [
    {
      category: 'Frontend Development',
      skills: ['Angular', 'TypeScript', 'RxJS', 'HTML5', 'CSS3', 'Bootstrap']
    },
    {
      category: 'Backend Development',
      skills: ['Node.js (Express)', 'PHP', 'SQL (MySQL)', 'MongoDB (Basic)']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman API Platform']
    }
  ];
}
