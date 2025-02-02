import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FilmService } from '../services/film.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-films',
  imports: [CommonModule,RouterModule, FormsModule],
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmsComponent {
  searchQuery: string = '';
  films: any[] = [];

  constructor(private filmService: FilmService) {}

  searchFilms() {
    if (this.searchQuery.trim() === '') {
      this.films = [];
      return;
    }
    this.filmService.searchFilms(this.searchQuery).subscribe(response => {
      this.films = response;
    });
  }

  showAllFilms() {
    this.filmService.getAllFilms().subscribe({
      next: (response) => {
        this.films = response; 
      },
      error: (error) => {
        console.error('Error fetching films:', error);
      }
    });
  }


}
