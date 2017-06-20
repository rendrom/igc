// https://angular.io/docs/ts/latest/guide/router.html
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
// import { NotFoundComponent } from './not-found/not-found.component';
// import { SearchDetailComponent } from './search-detail/search-detail.component';
import { FellowListComponent } from './fellow-list/fellow-list.component';
import { FellowDetailComponent } from './fellow-detail/fellow-detail.component';

const appRoutes: Routes = [
    {
        path:"",
        component: HomeComponent,
        pathMatch: 'full',
    },
    {
        path:"fellow",
        component: FellowListComponent,
    },
    {
        path:"fellow/:slug",
        component: FellowDetailComponent,
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
export class AppRoutingModule{}







