import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'episodes', component: EpisodeListComponent },
  { path: '**', redirectTo: '' },
];
