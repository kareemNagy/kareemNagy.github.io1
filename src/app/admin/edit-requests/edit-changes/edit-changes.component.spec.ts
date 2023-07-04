import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChangesComponent } from './edit-changes.component';

describe('EditChangesComponent', () => {
  let component: EditChangesComponent;
  let fixture: ComponentFixture<EditChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditChangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
