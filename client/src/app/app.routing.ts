// https://angular.io/docs/ts/latest/guide/router.html
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {FellowListComponent} from './components/fellow-list/fellow-list.component';
import {FellowDetailComponent} from './components/fellow-detail/fellow-detail.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './auth.guard';
import {SigninComponent} from './components/signin/signin.component';
import {PasswordResetComponent} from './components/password-reset/password-reset.component';
import {PasswordResetConfirmComponent} from 'app/components/password-reset-confirm/password-reset-confirm.component';
import {CommunityDetailComponent} from './components/community-detail/community-detail.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'password/reset',
    component: PasswordResetComponent
  },
  {
    path: 'password/reset/confirm/:uid/:token',
    component: PasswordResetConfirmComponent
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'community/:slug',
    component: CommunityDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'fellow',
    component: FellowListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'fellow/:slug',
    component: FellowDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'fellow/edit/:slug',
    component: FellowDetailComponent,
    canActivate: [AuthGuard],
    data: {editMode: true}
  },
  {
    path: '**',
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







