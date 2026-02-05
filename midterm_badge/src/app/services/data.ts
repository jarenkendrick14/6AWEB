import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

export interface Post {
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private posts$: Observable<Post[]> | null = null;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    if (!this.posts$) {
      // Fetch and cache the observable using shareReplay(1)
      this.posts$ = this.http.get<Post[]>(this.apiUrl).pipe(
        shareReplay(1)
      );
    }
    return this.posts$;
  }
}
