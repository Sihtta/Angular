import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EpisodesService, Episode } from '../services/episodes.service';
import { SpectatorDotsPipe } from '../spectator-dots.pipe';

@Component({
  selector: 'app-episode-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, SpectatorDotsPipe],
  templateUrl: './episode-detail.component.html',
  styleUrl: './episode-detail.component.scss',
})
export class EpisodeDetailComponent implements OnInit {
  episode?: Episode;

  constructor(
    private route: ActivatedRoute,
    private episodesService: EpisodesService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.episode = this.episodesService.getEpisodeById(id);
  }

  toggleLike(): void {
    if (!this.episode) return;

    const likeType: 'like' | 'unlike' =
      this.episode.liked ? 'unlike' : 'like';

    this.episodesService.likeEpisodeById(this.episode.id, likeType);
  }

  get likes(): number {
    return this.episode ? this.episodesService.getLikesById(this.episode.id) : 0;
  }
}
