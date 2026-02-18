import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeComponent } from '../episode/episode.component';
import { EpisodesService, Episode } from '../services/episodes.service';

@Component({
  selector: 'app-episode-list',
  standalone: true,
  imports: [CommonModule, EpisodeComponent],
  templateUrl: './episode-list.component.html',
  styleUrl: './episode-list.component.scss',
})
export class EpisodeListComponent {
  episodes: Episode[] = [];

  constructor(private episodesService: EpisodesService) {
    this.episodes = this.episodesService
      .getAllEpisodes()
      .filter(e => Number(e.note) > 8.5);
  }
}
