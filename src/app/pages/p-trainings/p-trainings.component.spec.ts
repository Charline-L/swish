import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PTrainingsComponent } from './p-trainings.component';

describe('PTrainingsComponent', () => {
  let component: PTrainingsComponent;
  let fixture: ComponentFixture<PTrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PTrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
