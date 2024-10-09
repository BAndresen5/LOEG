import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'yearList'
})
export class YearListPipe implements PipeTransform {

  transform(years: string[]) {
    return years?.length > 0 ? years.join(', ') : '--';
  }

}