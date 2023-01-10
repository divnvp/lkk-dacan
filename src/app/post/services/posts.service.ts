import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";
import { Post } from "../models/post";
import { Store } from "../../store/global-state";

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
}
