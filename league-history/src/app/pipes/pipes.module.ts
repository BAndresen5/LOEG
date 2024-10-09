import { NgModule } from "@angular/core";
import { YearListPipe } from "./year-list.pipe";
import { RecordBuilderPipe } from "./record-builder.pipe";
import { OwnerMatcherPipe } from "./owner-matcher.pipe";

@NgModule({
  declarations: [
    YearListPipe,
    RecordBuilderPipe,
    OwnerMatcherPipe
  ],
  imports: [

  ],
  exports: [
    YearListPipe,
    RecordBuilderPipe,
    OwnerMatcherPipe
  ]
})
export class PipesModule { }
