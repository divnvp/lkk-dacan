import { Component, OnInit } from '@angular/core';
import { PostsService } from "../services/posts.service";
import { Store } from "../../store/global-state";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{
  public posts$ = this.store.posts$;

  constructor(
    private service: PostsService,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(): void {
    this.service.fetchPosts();
  }
}
