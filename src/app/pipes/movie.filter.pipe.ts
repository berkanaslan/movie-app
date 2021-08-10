import {Pipe, PipeTransform} from "@angular/core";
import {Movie} from "../model/movie";

@Pipe({name: "filter"})
export class MovieFilterPipe implements PipeTransform{
  transform(value: Movie[], filter?: string): Movie[] {
    filter ??= "";
    return value.filter(movie => movie.title.includes(<string>filter));
  }
}
