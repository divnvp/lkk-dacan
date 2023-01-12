import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from "./services/posts.service";
import { PostComponent } from "./components/post.component/post.component";
import { PostRoutingModule } from "./post-routing.module";
import { CardComponent } from './components/card.component/card.component';
import { TuiIslandModule } from "@taiga-ui/kit";
import {TuiButtonModule} from "@taiga-ui/core";

@NgModule({
  declarations: [
    PostComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    TuiIslandModule,
    TuiButtonModule
  ],
  providers: [
    PostsService
  ]
})
export class PostModule { }
