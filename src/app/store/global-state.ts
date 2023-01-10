import { Post } from "../post/models/post";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Store {
  private posts = new BehaviorSubject<Post[]>([]);

  setPosts(posts: Post[]): void {
    this.posts.next(posts);
  }

  get posts$(): Observable<Post[]> {
    return this.posts;
  }
}
