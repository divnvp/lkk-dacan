import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from "./components/main.page/main.page.component";
import { RouterModule } from "@angular/router";
import { HomeRoutingModule } from "./home-routing.module";
import { HeaderComponent } from './header.component/header.component';

@NgModule({
  declarations: [
    MainPageComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
}
