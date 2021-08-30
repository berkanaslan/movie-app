import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Movie} from "../model/movie";
import {catchError, delay, map, tap} from "rxjs/operators";

@Injectable()
export class MovieService {
  url: string = "https://angular-movie-app-de460-default-rtdb.europe-west1.firebasedatabase.app" + "/movies";

  constructor(private http: HttpClient) {
  }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url + ".json").pipe(
      // Pipe serve us handle data before subscription.
      delay(4000),
      tap(data => console.log(data)),
      map(data => {
        const movies: Movie[] = [];
        for (const key in data) {
          movies.push({...data[key], id: key});
        }
        return movies;
      }),
      catchError(MovieService.handleError),
    );
  }

  getAllMoviesByCategories(categoryId: number): Observable<Movie[]> {
    if (categoryId == null) return this.getAllMovies();

    return this.getAllMovies().pipe(
      map(data => {
        const movies: Movie[] = [];

        for (const key in data) {
          if (data[key].categoryId === categoryId) {
            movies.push(data[key]);
          }
        }

        return movies;
      })
    );
  }

  save(movie: Movie): Observable<number> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this.http.post<number>(this.url + ".json", movie, httpOptions).pipe(catchError(MovieService.handleError));
  }

  getMovieById(id: string): Observable<Movie> {
    return this.http.get<Movie>(this.url + "/" + id + ".json").pipe(catchError(MovieService.handleError));
  }

  private static handleError(error: HttpErrorResponse) {
    // Client or client's network based errors:
    if (error.error instanceof ErrorEvent) {
      return throwError("Try again.");
    }
    // Backend, wrong uri, server error:
    switch (error.status) {
      case 401:
      case 403:
        return throwError("Unauthorized or access denied:");
      case 404:
        return throwError("Not found!");
      case 500:
        return throwError("Interval error!");
      default:
        return throwError("Something went wrong.");
    }
  }
}
