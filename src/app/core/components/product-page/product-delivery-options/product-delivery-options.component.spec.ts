import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeliveryOptionsComponent } from './product-delivery-options.component';

describe('ProductDeliveryOptionsComponent', () => {
  let component: ProductDeliveryOptionsComponent;
  let fixture: ComponentFixture<ProductDeliveryOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDeliveryOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDeliveryOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
