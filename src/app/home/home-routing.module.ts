import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { MainPage } from "./components/main.page/main.page";

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../post/post.module').then(m => m.PostModule)
      },
      {
        path: 'users',
        loadChildren: () => import('../users/users.module').then(m => m.UsersModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
