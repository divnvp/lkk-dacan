import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPage } from "./components/main.page/main.page";
import { RouterModule } from "@angular/router";
import { HomeRoutingModule } from "./home-routing.module";
import { HeaderComponent } from './components/header.component/header.component';
import { FooterComponent } from './components/footer.component/footer.component';

@NgModule({
  declarations: [
    MainPage,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
}
