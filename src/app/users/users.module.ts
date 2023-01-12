import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from "./services/users.service";
import { UserCardComponent } from './components/user-card/user-card.component';
import { UsersRoutingModule } from "./users-routing.module";
import {TuiIslandModule} from "@taiga-ui/kit";
import {TuiButtonModule, TuiSvgModule} from "@taiga-ui/core";

@NgModule({
  declarations: [
    UserCardComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    TuiIslandModule,
    TuiButtonModule,
    TuiSvgModule
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
