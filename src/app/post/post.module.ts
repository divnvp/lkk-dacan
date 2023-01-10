import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from "./services/posts.service";
import { PostComponent } from "./post.component/post.component";
import { PostRoutingModule } from "./post-routing.module";

@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  providers: [
    PostsService
  ]
})
export class PostModule { }
