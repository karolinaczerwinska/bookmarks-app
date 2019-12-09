import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bookmarks',
    pathMatch: 'full'
  },
  {
    path: 'bookmarks',
    component: BookmarksComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
