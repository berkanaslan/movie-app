import {Component, OnInit} from '@angular/core';
import {Movie} from "../model/movie";
import {MovieService} from "../services/movie.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers: [MovieService]
})

export class MovieDetailsComponent implements OnInit {
  movie: Movie;
  serviceError: any;

  constructor(private movieService: MovieService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.movieService.getMovieById(params["movieId"])
        .subscribe(data => this.movie = data, error => this.serviceError = error);
    });
  }
}
