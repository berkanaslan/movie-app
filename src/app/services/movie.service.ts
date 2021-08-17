import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../model/movie";

@Injectable()
export class MovieService {
  url: string = "http://localhost:3000/movies";

  constructor(private http: HttpClient) {
  }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url);
  }
}
