// https://angular.io/docs/ts/latest/guide/router.html
import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {FellowListComponent} from './fellow-list/fellow-list.component';
import {FellowDetailComponent} from './fellow-detail/fellow-detail.component';
import {NotFoundComponent} from "./not-found/not-found.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth.guard";

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: "",
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: "fellow",
    component: FellowListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "fellow/:slug",
    component: FellowDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "fellow/edit/:slug",
    component: FellowDetailComponent,
    canActivate: [AuthGuard],
    data: { editMode: true }
  },
  {
    path: "**",
    component: NotFoundComponent,
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}







