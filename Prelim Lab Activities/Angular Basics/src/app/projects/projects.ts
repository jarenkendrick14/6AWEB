import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {
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
