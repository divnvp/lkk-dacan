import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { forkJoin, map } from "rxjs";
import { Post } from "../models/post";
import { Store } from "../../store/global-state";
import { Comment } from "../models/comment";

@Injectable()
export class PostsService {
  constructor(
    private http: HttpClient,
    private store: Store
  ) {
  }

  fetchPosts(): void {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        map(response => {
          this.store.setPosts(response);
        })
      ).subscribe();
  }

  fetchPost(postId: number): void {
    const urlPost = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    const urlComments = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

    forkJoin([
      this.http.get<Post>(urlPost),
      this.http.get<Comment[]>(urlComments)
    ])
      .pipe(
        map(([responsePost, responseComments]) => {
          this.store.setPost(responsePost);
          this.store.setComments(responseComments);
        })
      ).subscribe();
  }
}
