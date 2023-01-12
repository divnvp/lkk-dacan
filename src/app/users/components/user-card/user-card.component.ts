import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { map } from "rxjs";
import { UsersService } from "../../services/users.service";
import { Store } from "../../../store/global-state";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  public user$ = this.store.user$;
  private userId: number = -1;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly service: UsersService,
    private readonly store: Store
  ) {
  }

  ngOnInit(): void {
    this.getUserId();
    this.getUser();
  }

  goHome(): void {
    void this.router.navigate([''])
  }

  private getUserId(): void {
    this.route.params
      .pipe(
        map(value => {
          const { id } = value;
          this.userId = id;
        })
      )
      .subscribe();
  }

  private getUser() {
    this.service.fetchUser(this.userId);
  }
}
