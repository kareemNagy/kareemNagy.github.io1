import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProductsComponent } from './project-products.component';

describe('ProjectProductsComponent', () => {
  let component: ProjectProductsComponent;
  let fixture: ComponentFixture<ProjectProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
