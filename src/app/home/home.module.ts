import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from "./components/main.page/main.page.component";
import { RouterModule } from "@angular/router";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
}
