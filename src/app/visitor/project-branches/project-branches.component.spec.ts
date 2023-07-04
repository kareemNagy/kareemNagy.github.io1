import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBranchesComponent } from './project-branches.component';

describe('ProjectBranchesComponent', () => {
  let component: ProjectBranchesComponent;
  let fixture: ComponentFixture<ProjectBranchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectBranchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
