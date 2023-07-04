import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageActionButtonsComponent } from './page-action-buttons.component';

describe('PageActionButtonsComponent', () => {
  let component: PageActionButtonsComponent;
  let fixture: ComponentFixture<PageActionButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageActionButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageActionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
