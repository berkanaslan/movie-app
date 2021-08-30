import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MoviesComponent} from "./movies/movies.component";
import {MovieDetailsComponent} from "./movie-details/movie-details.component";
import {CreateMovieComponent} from "./create-movie/create-movie.component";
import {AddCategoryComponent} from "./add-category/add-category.component";

const routes: Routes = [
  {path: "", redirectTo: "movies", pathMatch: "full"},
  {path: "movies", component: MoviesComponent},
  {path: "movies/add", component: CreateMovieComponent},
  {path: "movies/category/:categoryId", component: MoviesComponent},
  {path: "movies/:movieId", component: MovieDetailsComponent},
  {path: "category/add", component: AddCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
