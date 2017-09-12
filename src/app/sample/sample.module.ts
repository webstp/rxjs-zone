import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';

import { SampleRoutingModule } from './sample-routing.module';
import { SampleComponent } from './sample.component';

@NgModule({
  imports: [
    SharedModule,
    SampleRoutingModule
  ],
  declarations: [SampleComponent]
})
export class SampleModule { }
