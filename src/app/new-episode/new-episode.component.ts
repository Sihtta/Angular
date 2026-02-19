import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators, FormBuilder, FormGroup } from '@angular/forms'
import { EpisodesService, Episode } from '../services/episodes.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-new-episode',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-episode.component.html',
  styleUrl: './new-episode.component.scss'
})
export class NewEpisodeComponent {
  episodeForm!: FormGroup;
  previewEpisode: any = {};

  constructor(
    private formBuilder: FormBuilder,
    private episodesService: EpisodesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.episodeForm = this.formBuilder.group({
      titre: ['', Validators.required],
      date: ['', Validators.required],
      duree: ['', Validators.required],
      note: [''],
      synopsis: ['', Validators.required],
      realisateur: ['', Validators.required],
      acteur1: ['', Validators.required],
      acteur2: [''],
      acteur3: [''],
      url: ['', Validators.required],
    });

    this.episodeForm.valueChanges.subscribe(value => {
      this.previewEpisode = value;
    });
  }

  //ancien submit pour afficher dans la console
  //onSubmit(): void {
    //console.log(this.episodeForm.value);
  //}

  onSubmit(): void {
    if (this.episodeForm.invalid) return;

    const formValue = this.episodeForm.value;

    const newEpisode: Episode = {
      id: 0, 
      titre: formValue.titre!,
      annee: new Date(formValue.date!),
      duree: formValue.duree!,
      note: formValue.note || '0',
      synopsis: formValue.synopsis!,
      realisateur: formValue.realisateur!,
      casting: [
        formValue.acteur1,
        formValue.acteur2,
        formValue.acteur3
      ].filter(a => a),
      affiche: formValue.url!,
      likesBase: 0,
      liked: false
    };

    this.episodesService.addEpisode(newEpisode);

    this.router.navigate(['/episodes']);
  }
}
