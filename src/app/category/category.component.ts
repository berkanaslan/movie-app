import {Component, OnInit} from '@angular/core';
import {Category} from "../model/category";
import {CategoryRepository} from "../model/category.repository";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {
  categories: Category[];
  categoryRepository: CategoryRepository;
  displayAll: boolean = true;
  selectedCategory: Category = null;


  constructor() {
    this.categoryRepository = new CategoryRepository();
    this.categories = this.categoryRepository.getCategories();
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
