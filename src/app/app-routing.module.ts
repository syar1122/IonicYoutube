import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ChannelSectionResolverService } from './resolver/ChannelSection.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  {
    path: 'sections/:id',
    resolve: {
      sections: ChannelSectionResolverService
    },
    loadChildren: () => import('./pages/sections/sections.module').then(m => m.SectionsPageModule)
  },
  {
    path: 'playlists',
    loadChildren: () => import('./pages/playlists/playlists.module').then(m => m.PlaylistsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
