
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true, 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  name = 'Jaren Kendrick Yambao';
  title = 'Aspiring Full-Stack Web Developer';
  email = 'jsyambao@student.hau.edu.ph'; 
  phone = '+63 976 338 0683'; 
  location = 'San Nicolas 1st Lubao, Pampanga'; 
  linkedin = 'https://www.linkedin.com/in/jarenkendrick/'; 
  github = 'https://github.com/jarenkendrick14/'; 

  personalProfile = `
As a dedicated and ambitious college student pursuing a degree in Information Technology, 
I have a deep desire to develop web applications that are both effective and user-friendly. 
My education has equipped me with an understanding of the fundamental components of software 
development, and I look forward to putting this knowledge into practice. I aspire to develop 
into a comprehensive Full-Stack Developer and anticipate integrating cutting-edge technology 
to solve user interface design challenges. I especially appreciate the powerful tools of Angular 
and am motivated by the complete analytical process of problem-solving and the creative 
construction of functional software.

  `;

  keySkills = [
    'Angular', 'TypeScript & JavaScript (ES6+)', 'HTML5 & CSS3',
    'Responsive Web Design', 'RESTful APIs', 'Git & Version Control',
    'Problem Solving', 'Agile Methodologies', 'UI/UX Principles', 'SCSS/SASS'
  ];

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

  education = [
    {
      degree: 'Bachelor of Science in Information Technology - Specializing in Web Development',
      institution: 'Holy Angel University',
      period: '2023 - 2027',
      description: 'Focusing on software engineering, web development, and database management.'
    }
  ];

  projects = [
    {
      name: 'Dropify - Full-Stack E-Commerce Platform',
      technologies: 'Vue 3 (Composition API), Pinia, Node.js, Express, MongoDB, JWT',
      description: 'A complete e-commerce application for creator merchandise, featuring secure user authentication, a persistent shopping cart, and a comprehensive admin dashboard for managing products, users, and orders.'
    },
    {
      name: 'Travel Atelier - Full-Stack Travel Booking Site',
      technologies: 'Vue.js, Node.js, Express, Socket.IO',
      description: 'A modern web application for browsing and booking international travel. Features include user authentication, dynamic destination browsing, and a live messaging system for customer support.'
    },
    {
      name: 'ContactApp - Angular CRUD Application',
      technologies: 'Angular, TypeScript, Angular CLI',
      description: 'A classic CRUD (Create, Read, Update, Delete) application built with Angular for managing a list of contacts. This project demonstrates core Angular concepts including components, services, and data binding.'
    },
    {
      name: 'Cut the Cord - Tech Review Website',
      technologies: 'HTML5, CSS3, JavaScript',
      description: 'A responsive and interactive static website for reviewing wireless technology. Features a dynamic hero video background, animated UI elements, and interactive FAQ section, built with foundational web technologies.'
    }
  ];
}