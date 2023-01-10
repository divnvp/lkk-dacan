import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from "./services/posts.service";
import { PostComponent } from "./components/post.component/post.component";
import { PostRoutingModule } from "./post-routing.module";
import { CardComponent } from './components/card.component/card.component';
import {TuiIslandModule} from "@taiga-ui/kit";

@NgModule({
  declarations: [
    PostComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    TuiIslandModule
  ],
  providers: [
    PostsService
  ]
})
export class PostModule { }
