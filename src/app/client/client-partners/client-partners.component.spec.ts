import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPartnersComponent } from './client-partners.component';

describe('ClientPartnersComponent', () => {
  let component: ClientPartnersComponent;
  let fixture: ComponentFixture<ClientPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientPartnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
