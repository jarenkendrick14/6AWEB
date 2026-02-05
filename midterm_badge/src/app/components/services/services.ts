import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FormsModule, TruncatePipe],
  template: `
    <div class="card">
      <h2>⌨️ Services</h2>
      <input type="text" placeholder="Search tickets by title or content..."
             (input)="onSearch($event)" style="width:100%; box-sizing: border-box;">

      <div *ngIf="filteredPosts$ | async as posts">
        <div *ngFor="let post of posts" class="card" style="background: #fafafa;">
          <strong>Ticket #{{post.id}}: {{ post.title | titlecase }}</strong>
          <p>{{ post.body | truncate:150 }}</p>
        </div>
      </div>
    </div>
  `
})
export class ServicesComponent {
  private dataService = inject(DataService);
  private searchTerm$ = new BehaviorSubject<string>('');

  filteredPosts$ = combineLatest([
    this.dataService.getPosts(),
    this.searchTerm$.asObservable()
  ]).pipe(
    map(([posts, term]) => posts.filter(p =>
      p.title.toLowerCase().includes(term.toLowerCase()) ||
      p.body.toLowerCase().includes(term.toLowerCase())
    ))
  );

  onSearch(event: any) {
    this.searchTerm$.next(event.target.value);
  }
}
