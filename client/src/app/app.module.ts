import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppComponent} from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { FellowListComponent } from './fellow-list/fellow-list.component';
import { FellowDetailComponent } from './fellow-detail/fellow-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FellowListComponent,
    FellowDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
