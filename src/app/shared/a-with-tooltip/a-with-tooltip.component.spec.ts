import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AWithTooltipComponent } from './a-with-tooltip.component';

describe('AWithTooltipComponent', () => {
  let component: AWithTooltipComponent;
  let fixture: ComponentFixture<AWithTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AWithTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AWithTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
