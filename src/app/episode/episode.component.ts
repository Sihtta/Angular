import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpectatorDotsPipe } from '../spectator-dots.pipe';

@Component({
  selector: 'app-episode',
  standalone: true,
  imports: [CommonModule, SpectatorDotsPipe],
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.scss'
})
export class EpisodeComponent {
  @Input() titre!: string;
  @Input() annee!: Date;            
  @Input() duree!: string;
  @Input() note!: string;
  @Input() synopsis!: string;
  @Input() realisateur!: string;
  @Input() casting!: string[];
  @Input() affiche!: string;

  @Input() userNote?: number;

  liked = false;
  @Input() likesBase = 0;

  toggleLike(): void {
    this.liked = !this.liked;
  }

  get likes(): number {
    return this.likesBase + (this.liked ? 1 : 0);
  }
}
