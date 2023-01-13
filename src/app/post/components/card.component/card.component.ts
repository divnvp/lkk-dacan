import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Post } from "../../models/post";
import { User } from "../../../users/models/user";
import { TuiDialogService } from "@taiga-ui/core";
import { TuiDestroyService } from "@taiga-ui/cdk";
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { PostsService } from "../../services/posts.service";
import { Store } from "../../../store/global-state";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [TuiDestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  public comments$ = this.store.comments$;

  @Input() post!: Post;
  @Input() user: User | undefined;

  constructor(
    private store: Store,
    private service: PostsService,
    private dialogService: TuiDialogService
  ) {
  }

  openDialog(
    content: PolymorpheusContent
  ): void {
    this.getPost();
    this.dialogService.open(content)
      .subscribe();
  }

  private getPost(): void {
    this.service.fetchPost(this.post.id!);
  }
}
