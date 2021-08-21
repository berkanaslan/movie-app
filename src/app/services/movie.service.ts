import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Movie} from "../model/movie";
import {catchError, tap} from "rxjs/operators";

@Injectable()
export class MovieService {
  url: string = "http://localhost:3000/movies1";

  constructor(private http: HttpClient) {
  }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url).pipe(
      // Pipe serve us handle data before subscription.
      tap(data => console.log(data)),
      catchError(MovieService.handleError),
    );
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
