import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EpisodesService } from '../services/episodes.service';

@Component({
  selector: 'app-episode-detail',
  standalone: true,
  templateUrl: './episode-detail.component.html',
  styleUrl: './episode-detail.component.scss'
})
export class EpisodeDetailComponent {

  episode: any;

  liked = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private episodesService: EpisodesService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.episode = this.episodesService.getEpisodeById(id);
  }

  toggleLike(): void {
    this.liked = !this.liked;
  }

  get likes(): number {
    return this.episode.likesBase + (this.liked ? 1 : 0);
  }

  goBack(): void {
    this.router.navigate(['/episodes']);
  }
}
