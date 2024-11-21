import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TimeCircleComponent } from './time-circle.component';

import { ExperienceService } from '../../services/experience.service';

describe('TimeCircleComponent', () => {
  let component: TimeCircleComponent;
  let fixture: ComponentFixture<TimeCircleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        TimeCircleComponent
      ],
      providers: [
        ExperienceService
      ]
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
