import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCircleComponent } from './time-circle.component';

import { ExperienciaService } from '../../services/experiencia.service';

describe('TimeCircleComponent', () => {
  let component: TimeCircleComponent;
  let fixture: ComponentFixture<TimeCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TimeCircleComponent
      ],
      providers: [
        ExperienciaService
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
