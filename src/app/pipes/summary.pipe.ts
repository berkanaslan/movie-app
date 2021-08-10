import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: "summary"})
export class SummaryPipe implements PipeTransform {
  transform(value: string, limit?: number): any {
    if (value == null) {
      return null;
    }

    limit ??= 49;

    if (limit >= value.length) {
      return value;
    }

    return value.substr(0, limit) + "...";
  }
}
