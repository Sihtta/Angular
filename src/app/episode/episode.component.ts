import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Episode } from '../services/episodes.service';
import { ConfirmClickDirective } from '../confirm-click.directive';

@Component({
  selector: 'app-episode',
  standalone: true,
  imports: [CommonModule, RouterLink, ConfirmClickDirective],
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.scss',
})
export class EpisodeComponent {
  @Input({ required: true }) episode!: Episode;

  @Output() delete = new EventEmitter<number>();

  onDeleteConfirmed() {
    this.delete.emit(this.episode.id);
  }
}