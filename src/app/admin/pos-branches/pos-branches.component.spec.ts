import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosBranchesComponent } from './pos-branches.component';

describe('PosBranchesComponent', () => {
  let component: PosBranchesComponent;
  let fixture: ComponentFixture<PosBranchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosBranchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
