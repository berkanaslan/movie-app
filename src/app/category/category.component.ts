import {Component, OnInit} from '@angular/core';
import {Category} from "../model/category";
import {CategoryService} from "../services/category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [
    CategoryService
  ]
})

export class CategoryComponent implements OnInit {
  categories: Category[];
  displayAll: boolean = true;
  selectedCategory: Category = null;
  serviceError: any;

  constructor(private categoryService: CategoryService) {
    this.getAllCategories();
  }

  public getAllCategories() {
    this.categoryService.getAllCategories().subscribe(data => this.categories = data, error => this.serviceError = error);
  }

  ngOnInit(): void {

  }

  onCategorySelected(category?: Category) {
    if (category != null) {
      this.selectedCategory = category;
      this.displayAll = false;
    } else {
      this.selectedCategory = null;
      this.displayAll = true;
    }
  }
}
