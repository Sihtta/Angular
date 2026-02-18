import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeComponent } from './episode/episode.component';
import { HeaderComponent } from './header/header.component';

type Episode = {
  titre: string;
  annee: Date;
  duree: string;
  note: string;
  synopsis: string;
  realisateur: string;
  casting: string[];
  affiche: string;
  likesBase: number;
  userNote?: number; // Ex3.1
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, EpisodeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  episodes: Episode[] = [
    {
      titre: 'La guerre des étoiles',
      annee: new Date(1977, 0, 1),
      duree: '121 min',
      note: '8.6',
      synopsis:
        'Luke Skywalker rejoint la Rébellion et affronte l’Empire dirigé par Dark Vador.',
      realisateur: 'George Lucas',
      casting: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
      affiche: 'https://fr.web.img6.acsta.net/medias/nmedia/18/35/41/59/18422600.jpg',
      likesBase: 73,
      userNote: 9
    },
    {
      titre: "L'empire contre-attaque",
      annee: new Date(1980, 0, 1),
      duree: '124 min',
      note: '8.7',
      synopsis:
        'L’Empire traque l’Alliance Rebelle tandis que Luke se forme auprès de Yoda.',
      realisateur: 'Irvin Kershner',
      casting: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
      affiche: 'https://affiches-francaises.com/cdn/shop/files/IMG_7330.heic?v=1682428350',
      likesBase: 77,
      userNote: 6
    },
    {
      titre: 'Le retour du Jedi',
      annee: new Date(1983, 0, 1),
      duree: '131 min',
      note: '8.6',
      synopsis:
        'Luke affronte Dark Vador et l’Empereur tandis que la Rébellion attaque l’Étoile de la mort.',
      realisateur: 'Richard Marquand',
      casting: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
      affiche: 'https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg',
      likesBase: 71,
      userNote: 3
    }
  ];

  // Ex3.2 : ne garder que note IMDb > 8.5
  get episodesFiltrees(): Episode[] {
    return this.episodes.filter(e => Number(e.note) > 8.5);
  }
}
