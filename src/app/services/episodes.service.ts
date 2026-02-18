import { Injectable } from '@angular/core';

export type Episode = {
  id: number;          
  titre: string;
  annee: Date;
  duree: string;
  note: string;
  synopsis: string;
  realisateur: string;
  casting: string[];
  affiche: string;
  likesBase: number;
  userNote?: number;
  liked: boolean;       
};

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  private episodes: Episode[] = [
    {
      id: 1,
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
      userNote: 9,
      liked: false,
    },
    {
      id: 2,
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
      userNote: 6,
      liked: false,
    },
    {
      id: 3,
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
      userNote: 3,
      liked: false,
    },
  ];

  getAllEpisodes(): Episode[] {
    return this.episodes;
  }

  getEpisodeById(episodeId: number): Episode {
    const episode = this.episodes.find(e => e.id === episodeId);

    if (!episode) {
      throw new Error('Episode not found!');
    } else {
      return episode;
    }
  }

  likeEpisodeById(episodeId: number, likeType: 'like' | 'unlike'): void {
    const episode = this.getEpisodeById(episodeId);

    if (likeType === 'like') {
      episode.liked = true;
    } else {
      episode.liked = false;
    }
  }

  getLikesById(episodeId: number): number {
    const episode = this.getEpisodeById(episodeId);
    return episode.likesBase + (episode.liked ? 1 : 0);
  }

}
