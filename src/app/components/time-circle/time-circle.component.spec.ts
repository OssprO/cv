import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCircleComponent } from './time-circle.component';

describe('TimeCircleComponent', () => {
  let component: TimeCircleComponent;
  let fixture: ComponentFixture<TimeCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
