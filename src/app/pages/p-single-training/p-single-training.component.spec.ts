import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PSingleTrainingComponent } from './p-single-training.component';

describe('PSingleTrainingComponent', () => {
  let component: PSingleTrainingComponent;
  let fixture: ComponentFixture<PSingleTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PSingleTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PSingleTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
