import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Category} from "../model/category";
import {catchError, map, tap} from "rxjs/operators";

@Injectable()
export class CategoryService {
  url: string = "https://angular-movie-app-de460-default-rtdb.europe-west1.firebasedatabase.app" + "/categories";

  constructor(private http: HttpClient) {
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url + ".json").pipe(
      map(data => {
        const categories: Category[] = [];

        for (const key in data) {
          categories.push({...data[key], id: key});
        }

        return categories;
      }),
      catchError(CategoryService.handleError))
  }

  save(category: Category): Observable<Category> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this.http.post<Category>(this.url + ".json", category, httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(CategoryService.handleError),
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
