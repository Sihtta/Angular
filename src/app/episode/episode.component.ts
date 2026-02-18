import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpectatorDotsPipe } from '../spectator-dots.pipe';
import { EpisodesService, Episode } from '../services/episodes.service';

@Component({
  selector: 'app-episode',
  standalone: true,
  imports: [CommonModule, SpectatorDotsPipe],
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.scss',
})
export class EpisodeComponent {
  @Input({ required: true }) episode!: Episode;

  constructor(private episodesService: EpisodesService) {}

  toggleLike(): void {
    this.episodesService.likeEpisodeById(this.episode.id);
  }

  get likes(): number {
    return this.episodesService.getLikes(this.episode);
  }
}
