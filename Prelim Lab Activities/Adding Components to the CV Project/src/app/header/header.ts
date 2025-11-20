import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  name = 'Jaren Kendrick Yambao';
  title = 'Aspiring Full-Stack Web Developer';
  email = 'jsyambao@student.hau.edu.ph';
  phone = '+63 976 338 0683';
  location = 'San Nicolas 1st Lubao, Pampanga';
  linkedin = 'https://www.linkedin.com/in/jarenkendrick/';
  github = 'https://github.com/jarenkendrick14/';

  personalProfile = `As a dedicated and ambitious college student pursuing a degree in Information Technology,
  I have a deep desire to develop web applications that are both effective and user-friendly.
  My education has equipped me with an understanding of the fundamental components of software
  development. I aspire to develop into a comprehensive Full-Stack Developer using Angular.`;
}
