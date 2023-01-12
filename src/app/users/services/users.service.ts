import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { map } from "rxjs";
import { Store } from "../../store/global-state";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    private http: HttpClient,
    private store: Store
  ) {
  }

  fetchUsers(): void {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map(response => {
          this.store.setUsers(response);
        })
      ).subscribe();
  }

  fetchUser(userId: number): void {
    this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .pipe(map(response => {
        this.store.setUser(response);
      }))
      .subscribe();
  }
}
