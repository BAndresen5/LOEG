import { Pipe, PipeTransform } from "@angular/core";
import { Owner } from "../../api/owner/owner";

@Pipe({
  name: 'ownerMatcher'
})
export class OwnerMatcherPipe implements PipeTransform {

  transform(ownerId: string, owners: Owner[]) {
    return ownerId && owners?.length > 0 ? owners.find((owner) => owner.id === ownerId)?.name : '--'
  }

}
