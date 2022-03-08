import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaylistsPage } from './playlists.page';

const routes: Routes = [
  {
    path: '',
    component: PlaylistsPage,
    children: [
      {
        path: ':videoId',
        loadChildren: './pages/video.module#VideoPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaylistsPageRoutingModule { }
