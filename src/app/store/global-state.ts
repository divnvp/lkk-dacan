import { Post } from "../post/models/post";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../users/models/user";

@Injectable({
  providedIn: 'root'
})
export class Store {
  private posts = new BehaviorSubject<Post[]>([]);
  private users = new BehaviorSubject<User[]>([]);
  private user = new BehaviorSubject<User>({});

  setPosts(posts: Post[]): void {
    this.posts.next(posts);
  }

  get posts$(): Observable<Post[]> {
    return this.posts;
  }

  setUsers(users: User[]): void {
    this.users.next(users);
  }

  get users$(): Observable<User[]> {
    return this.users;
  }

  setUser(user: User): void {
    this.user.next(user);
  }

  get user$(): Observable<User> {
    return this.user;
  }
}
