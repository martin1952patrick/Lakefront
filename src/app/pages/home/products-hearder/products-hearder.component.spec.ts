import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsHearderComponent } from './products-hearder.component';

describe('ProductsHearderComponent', () => {
  let component: ProductsHearderComponent;
  let fixture: ComponentFixture<ProductsHearderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsHearderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsHearderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
