import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, EpisodeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
