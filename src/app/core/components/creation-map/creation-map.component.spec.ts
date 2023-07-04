import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationMapComponent } from './creation-map.component';

describe('CreationMapComponent', () => {
  let component: CreationMapComponent;
  let fixture: ComponentFixture<CreationMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
