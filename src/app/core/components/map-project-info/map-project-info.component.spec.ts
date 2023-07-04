import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapProjectInfoComponent } from './map-project-info.component';

describe('MapProjectInfoComponent', () => {
  let component: MapProjectInfoComponent;
  let fixture: ComponentFixture<MapProjectInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapProjectInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapProjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
