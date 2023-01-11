import { Component, Input } from '@angular/core';
import { Post } from "../../models/post";
import { User } from "../../../users/models/user";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() post!: Post;
  @Input() user: User | undefined;

  constructor(
  ) {
  }
}
