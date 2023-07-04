import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapStatisticsDetailsComponent } from './map-statistics-details.component';

describe('MapStatisticsDetailsComponent', () => {
  let component: MapStatisticsDetailsComponent;
  let fixture: ComponentFixture<MapStatisticsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapStatisticsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapStatisticsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
