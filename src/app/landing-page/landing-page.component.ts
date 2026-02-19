import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  email: string = 'me@starwars.com';
  constructor(private router: Router) {}

  goToEpisodes(): void {
    this.router.navigate(['/episodes']);
  }

  onSubmit(): void {
    console.log('Email inscrit:', this.email)
  }
  
}  

