import { Component, OnInit } from '@angular/core';
import { AddFilmService, Film } from '../pages/add-film.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-film',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-film.component.html',
  styleUrl: './add-film.component.css'
})
export class AddFilmComponent implements OnInit{

  films: Film[] = []; // List of films to display
  newFilm: Film = { filmid: 0, filmName: '', genre: '', description: '', rating: '', runTime: 0 }; // Model for new film

  constructor(private filmService: AddFilmService) {}

  ngOnInit(): void {
    this.loadFilms(); // Load existing films when the component initializes
  }

  loadFilms(): void {
    this.filmService.getFilms().subscribe(data => this.films = data);
  }

  addFilm(): void {
    this.filmService.addFilm(this.newFilm).subscribe(() => {
      this.loadFilms(); // Reload films after adding a new one
      this.newFilm = { filmid: 0, filmName: '', genre: '', description: '', rating: '', runTime: 0 }; // Reset form
    });
  }

  deleteFilm(filmId: number): void {
    this.filmService.deleteFilm(filmId).subscribe(() => {
      this.loadFilms(); // Reload films after deleting one
    });
  }

}
