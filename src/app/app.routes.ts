import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { NewEpisodeComponent } from './new-episode/new-episode.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'episodes', component: EpisodeListComponent },
  { path: 'episodes/:id', component: EpisodeDetailComponent },
  { path: 'new-episode', component: NewEpisodeComponent },
  { path: '**', redirectTo: '' },
];
