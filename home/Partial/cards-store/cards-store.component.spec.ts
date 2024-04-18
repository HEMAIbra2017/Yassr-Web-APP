import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsStoreComponent } from './cards-store.component';

describe('CardsStoreComponent', () => {
  let component: CardsStoreComponent;
  let fixture: ComponentFixture<CardsStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
