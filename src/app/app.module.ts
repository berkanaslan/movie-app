import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {CategoryComponent} from './category/category.component';
import {MoviesComponent} from './movies/movies.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {FooterComponent} from './footer/footer.component';
import {SummaryPipe} from "./pipes/summary.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MovieFilterPipe} from "./pipes/movie.filter.pipe";
import {AlertifyService} from "./services/alertify.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {CreateMovieComponent} from './create-movie/create-movie.component';
import {FormAlertDivComponent} from './form-alert-div/form-alert-div.component';
import {AddCategoryComponent} from './add-category/add-category.component';
import {AuthComponent} from './auth/auth.component';
import {ErrorInterceptor} from "./services/error.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    MoviesComponent,
    MovieDetailsComponent,
    FooterComponent,
    SummaryPipe,
    MovieFilterPipe,
    CreateMovieComponent,
    FormAlertDivComponent,
    AddCategoryComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AlertifyService,
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
