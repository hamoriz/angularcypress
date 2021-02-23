import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickerInputComponent } from './ticker-input.component';

describe('TickerInputComponent', () => {
  let component: TickerInputComponent;
  let fixture: ComponentFixture<TickerInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TickerInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TickerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
