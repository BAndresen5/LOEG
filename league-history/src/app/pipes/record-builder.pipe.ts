import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'recordBuilder'
})
export class RecordBuilderPipe implements PipeTransform {

  transform(wins: number, losses: number): string {
    return wins != null && losses != null ? `${wins} - ${losses}` : '--'
  }

}
