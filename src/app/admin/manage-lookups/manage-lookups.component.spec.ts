import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLookupsComponent } from './manage-lookups.component';

describe('ManageLookupsComponent', () => {
  let component: ManageLookupsComponent;
  let fixture: ComponentFixture<ManageLookupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageLookupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageLookupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
