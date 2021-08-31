import {Component, OnInit} from '@angular/core';
import {Movie} from "../model/movie";
import {AlertifyService} from "../services/alertify.service";
import {MovieService} from "../services/movie.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService]
})

export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  popularMovies: Movie[] = [];
  inputText: string = "";
  serviceError: any;
  loading: boolean = false;

  constructor(private alertify: AlertifyService,
              private movieService: MovieService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
      this.movieService.getAllMoviesByCategories(params["categoryId"]).subscribe(data => {
        this.movies = data;
        this.filteredMovies = this.movies;
        this.loading = false;
      }, error => {
        this.serviceError = error;
        this.loading = false
      })
    });
  }


  onInputChanged() {
    this.filteredMovies = this.inputText
      ? this.filteredMovies
        .filter(movie => movie.title.indexOf(this.inputText) !== -1 || movie.description.indexOf(this.inputText) !== -1)
      : this.movies;
  }

  onAddToListClicked($event: any, movie: Movie) {
    if ($event.target.classList.contains("btn-primary")) {
      $event.target.classList.remove("btn-primary");
      $event.target.classList.add("btn-danger");
      $event.target.innerText = "Remove from list";
      this.alertify.success(movie.title + " added to list.");
    } else {
      $event.target.classList.remove("btn-danger");
      $event.target.classList.add("btn-primary");
      $event.target.innerText = "Add to list";
      this.alertify.error(movie.title + " removed from list.");
    }
  }
}
