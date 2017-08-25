import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {FlexLayoutModule} from "@angular/flex-layout";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdListModule,
  MdCardModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdProgressSpinnerModule,
  MdInputModule,
} from '@angular/material';

import {QuillEditorModule} from 'ngx-quill-editor';

import {AppComponent} from './components/app.component';
import {AppRoutingModule} from './app.routing';
import {HomeComponent} from './components/home/home.component';
import {FellowListComponent} from './components/fellow-list/fellow-list.component';
import {FellowDetailComponent} from './components/fellow-detail/fellow-detail.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from "./auth.guard";
import {AuthenticationService} from "./services/authentication.service";
import {FellowsService} from "./services/fellows.service";
import {ExRequestOptions} from "./services/ex-request.service";
import {UserService} from "./services/user.service";
import {HttpClientService} from "./services/http-client.service";
import {SigninComponent} from './components/signin/signin.component';
import {PasswordResetComponent} from "./components/password-reset/password-reset.component";
import {PasswordResetConfirmComponent} from './components/password-reset-confirm/password-reset-confirm.component';
import {CommunityListComponent} from "./components/community-list/community-list.component";
import {CommunityService} from "./services/community.service";
import {CommunityDetailComponent} from './components/community-detail/community-detail.component';
import { SafeHtmlPipe } from './pipes/safe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CommunityListComponent,
    FellowListComponent,
    FellowDetailComponent,
    NotFoundComponent,
    LoginComponent,
    SigninComponent,
    PasswordResetComponent,
    PasswordResetConfirmComponent,
    CommunityDetailComponent,
    SafeHtmlPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    MdButtonModule,
    MdMenuModule,
    MdListModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdInputModule,

    QuillEditorModule,

    AppRoutingModule
  ],
  providers: [
    CommunityService,
    FellowsService,
    AuthGuard,
    AuthenticationService,
    UserService,
    ExRequestOptions,
    HttpClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
