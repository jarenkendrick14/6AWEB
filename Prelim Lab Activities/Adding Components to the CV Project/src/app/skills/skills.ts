import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent {
  keySkills = [
    'Angular', 'TypeScript', 'HTML5 & CSS3',
    'RESTful APIs', 'Git', 'UI/UX Principles'
  ];

  technicalProficiencies = [
    {
      category: 'Frontend Development',
      skills: ['Angular', 'TypeScript', 'RxJS', 'HTML5', 'CSS3', 'Bootstrap']
    },
    {
      category: 'Backend Development',
      skills: ['Node.js (Express)', 'PHP', 'SQL (MySQL)', 'MongoDB']
    },
    {
      category: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman']
    }
  ];
}
