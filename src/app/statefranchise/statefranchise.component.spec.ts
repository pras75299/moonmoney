import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatefranchiseComponent } from './statefranchise.component';

describe('StatefranchiseComponent', () => {
  let component: StatefranchiseComponent;
  let fixture: ComponentFixture<StatefranchiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatefranchiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatefranchiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
