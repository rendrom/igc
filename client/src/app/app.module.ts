import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdListModule,
  MdCardModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdProgressSpinnerModule,
  MdInputModule
} from '@angular/material';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {HomeComponent} from './home/home.component';
import {FellowListComponent} from './fellow-list/fellow-list.component';
import {FellowDetailComponent} from './fellow-detail/fellow-detail.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from "app/auth.guard";
import {AuthenticationService} from "./authentication.service";
import {FellowsService} from "./fellows/fellows.service";
import {ExRequestOptions} from "./ex-request.service";
import {UserService} from "app/user.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FellowListComponent,
    FellowDetailComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdListModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdInputModule,
    AppRoutingModule
  ],
  providers: [
    FellowsService,
    AuthGuard,
    AuthenticationService,
    UserService,
    ExRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
