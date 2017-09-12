import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AWithTooltipComponent } from './a-with-tooltip/a-with-tooltip.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [AWithTooltipComponent],
  exports: [AWithTooltipComponent]
})
export class SharedModule { }
