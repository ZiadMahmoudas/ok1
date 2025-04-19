import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TruncatePipe } from './truncate.pipe';


@NgModule({
  declarations: [
    TruncatePipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],

  exports:[TruncatePipe]
})
export class SharedModule { }
