import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../services/category.service";
import {Category} from "../model/category";
import {MovieService} from "../services/movie.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {Movie} from "../model/movie";

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css'],
  providers: [CategoryService, MovieService]
})
export class CreateMovieComponent implements OnInit {
  categories: Category[];

  movieForm: FormGroup = new FormGroup({
    titleController: new FormControl("Title"),
    descriptionController: new FormControl("Description"),
    imageURLController: new FormControl("1.jpeg"),
    categoryIdController: new FormControl("0"),
  });


  constructor(private categoryService: CategoryService,
              private movieService: MovieService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(categories => this.categories = categories);
  }

  onSaveButtonPressed() {
    const movie = {
      id: 0,
      title: this.movieForm.value.titleController,
      description: this.movieForm.value.descriptionController,
      imageURL: this.movieForm.value.imageURLController,
      categoryId: this.movieForm.value.categoryIdController,
      isPopular: false,
    };

    this.movieService.save(movie).subscribe(value => this.router.navigate(["/movies", value.id]));
  }
}
