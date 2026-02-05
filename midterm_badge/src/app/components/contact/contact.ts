import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="card">
      <h2>📩 Contact Us</h2>
      <form style="display: flex; flex-direction: column;">
        <label>Name</label>
        <input name="name" [(ngModel)]="user.name" placeholder="Full Name">

        <label>Email</label>
        <input name="email" [(ngModel)]="user.email" placeholder="email@example.com">

        <label>Message</label>
        <textarea name="msg" [(ngModel)]="user.message" rows="4" placeholder="How can we help?"></textarea>

        <button type="button" style="padding: 10px; background: #343a40; color: white; border: none; cursor: pointer;">Submit Ticket</button>
      </form>
    </div>

    <div class="card" style="background: #e9ecef;">
      <h3>Form Preview</h3>
      <p><strong>Name:</strong> {{ user.name | uppercase }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Message Preview:</strong> {{ user.message }}</p>
    </div>
  `
})
export class ContactComponent {
  user = { name: '', email: '', message: '' };
}
