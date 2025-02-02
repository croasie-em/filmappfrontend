import { Component, OnInit , NgModule} from '@angular/core';
import { CinemaService, Cinema } from '../../pages/services/cinema.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-cinema',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-cinema.component.html',
  styleUrl: './add-cinema.component.css'
})
export class AddCinemaComponent implements OnInit {
  cinemas: Cinema[] = [];
  newCinema: Cinema = { cinemaid: 0, cinemaName: '', city: '', numberOfScreens: '' };

  constructor(private cinemaService: CinemaService) {}

  ngOnInit() {
    this.loadCinemas();
  }

  loadCinemas() {
    this.cinemaService.getCinemas().subscribe(data => this.cinemas = data);
  }

  addCinema() {
    this.cinemaService.addCinema(this.newCinema).subscribe(() => {
      this.loadCinemas();
      this.newCinema = { cinemaid: 0, cinemaName: '', city: '', numberOfScreens: '' };
    });
  }

  deleteCinema(id: number) {
    this.cinemaService.deleteCinema(id).subscribe(() => this.loadCinemas());
  }
}
