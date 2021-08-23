import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../services/category.service";
import {Category} from "../model/category";

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css'],
  providers: [CategoryService]
})
export class CreateMovieComponent implements OnInit {
  categories: Category[];


  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(categories => this.categories = categories);
  }

  onSaveButtonPressed() {

  }
}
