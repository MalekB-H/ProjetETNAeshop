import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBoxUpdateComponent } from './product-box-update.component';

describe('ProductBoxUpdateComponent', () => {
  let component: ProductBoxUpdateComponent;
  let fixture: ComponentFixture<ProductBoxUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductBoxUpdateComponent]
    });
    fixture = TestBed.createComponent(ProductBoxUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
