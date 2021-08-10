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
  popularMovies: Movie[] = [];
  movieRepository: MovieRepository;

  inputText: string = "";

  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    this.popularMovies = this.movieRepository.getPopularMovies();
  }

  ngOnInit(): void {
  }
}
