import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-a-with-tooltip',
  templateUrl: './a-with-tooltip.component.html',
})
export class AWithTooltipComponent {

    private openTimeout;

    @Input() anchorId: string;
    @Input() tooltipKey: string;
    @Input() placement = 'top';
    @Output() click = new EventEmitter<any>();

    ngOnDestroy() {
        if (this.openTimeout) {
            clearTimeout(this.openTimeout);
        }
    }

    showTooltip(tooltip) {
        if (tooltip && !tooltip.isOpen()) {
            this.openTimeout = setTimeout(() => tooltip.open(), 500);
        }
    }

    hideTooltip(tooltip) {
        clearTimeout(this.openTimeout);
        if (tooltip && tooltip.isOpen()) {
            tooltip.close();
        }
    }

    onClick(event: any) {
        this.click.emit(event);
    }

}
