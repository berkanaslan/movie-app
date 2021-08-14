import {Component, OnInit} from '@angular/core';
import {Movie} from "../model/movie";
import {MovieRepository} from "../model/movie.repository";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  movies: Movie[] = []
  filteredMovies: Movie[] = []
  popularMovies: Movie[] = [];
  movieRepository: MovieRepository;

  inputText: string = "";

  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    this.filteredMovies = this.movies;
    this.popularMovies = this.movieRepository.getPopularMovies();
  }

  ngOnInit(): void {

  }

  onInputChanged() {
    this.filteredMovies = this.inputText
      ? this.filteredMovies
        .filter(movie => movie.title.indexOf(this.inputText) !== -1 || movie.description.indexOf(this.inputText) !== -1)
      : this.movies;
  }
}
