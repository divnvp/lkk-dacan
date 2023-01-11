import { Component, OnInit } from '@angular/core';
import { PostsService } from "../../services/posts.service";
import { Store } from "../../../store/global-state";
import { UsersService } from "../../../users/services/users.service";
import { User } from "../../../users/models/user";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{
  public posts$ = this.store.posts$;
  public users$ = this.store.users$;

  constructor(
    private service: PostsService,
    private userService: UsersService,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.getAllPosts();
    this.getAllUsers();
  }

  getAllPosts(): void {
    this.service.fetchPosts();
  }

  getAllUsers(): void {
    this.userService.fetchUsers();
  }

  getUserById(users: User[] | null, userId: number): User | undefined {
      return users?.find(user => user.id === userId);
  }
}
