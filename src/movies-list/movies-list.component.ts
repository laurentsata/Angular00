import { Component } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {

showMovies: boolean = true;

moviesList: string[] = ["L'empire contre attaque", "Shreck et l'ane", "Winni l'ourson", "Ya til un pilote dans l'avion ?"];

}