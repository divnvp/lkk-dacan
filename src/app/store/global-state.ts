import { Post } from "../post/models/post";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../users/models/user";
import { Comment } from "../post/models/comment";

@Injectable({
  providedIn: 'root'
})
export class Store {
  private posts = new BehaviorSubject<Post[]>([]);
  private post = new BehaviorSubject<Post>({});
  private comments = new BehaviorSubject<Comment[]>([]);
  private users = new BehaviorSubject<User[]>([]);
  private user = new BehaviorSubject<User>({});

  setPosts(posts: Post[]): void {
    this.posts.next(posts);
  }
  get posts$(): Observable<Post[]> {
    return this.posts;
  }

  setPost(post: Post): void {
    this.post.next(post);
  }
  get post$(): Observable<Post> {
    return this.post;
  }

  setComments(comments: Comment[]): void {
    this.comments.next(comments);
  }
  get comments$(): Observable<Comment[]> {
    return this.comments;
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
