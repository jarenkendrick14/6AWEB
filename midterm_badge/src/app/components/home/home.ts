import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <h2>🏠 Home</h2>
      <h1>Welcome!</h1>
      <p>This portal pulls remote records and shares them across pages.</p>

      <hr>
      <h3>Latest Updates</h3>
      <div *ngIf="latestPosts$ | async as posts; else loading">
        <div *ngFor="let post of posts" style="margin-bottom: 15px; border-left: 4px solid #343a40; padding-left: 15px;">
          <strong>• {{ post.title | uppercase }}</strong>
          <p style="font-size: 0.9rem; color: #666;">{{ post.body | slice:0:100 }}...</p>
        </div>
      </div>
      <ng-template #loading><p>Fetching latest tickets...</p></ng-template>
    </div>
  `
})
export class HomeComponent {
  private dataService = inject(DataService);
  latestPosts$ = this.dataService.getPosts().pipe(map(posts => posts.slice(0, 3)));
}
