import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DensityChartComponent } from './density-chart.component';

describe('DensityChartComponent', () => {
  let component: DensityChartComponent;
  let fixture: ComponentFixture<DensityChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DensityChartComponent]
    });
    fixture = TestBed.createComponent(DensityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
