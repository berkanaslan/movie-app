import {Category} from "./category";

export class CategoryRepository {
  private categories: Category[];

  constructor() {
    this.categories = [
      {id: 0, name: "Adventure"},
      {id: 1, name: "Comedy"},
      {id: 2, name: "Document"},
      {id: 3, name: "Sitcom"},
    ];
  }

  getCategories(): Category[] {
    return this.categories;
  }

  findById(id: number): Category | undefined {
    return this.categories.find(value => value.id == id);
  }
}
