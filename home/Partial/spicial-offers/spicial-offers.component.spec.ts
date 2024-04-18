import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpicialOffersComponent } from './spicial-offers.component';

describe('SpicialOffersComponent', () => {
  let component: SpicialOffersComponent;
  let fixture: ComponentFixture<SpicialOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpicialOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpicialOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
