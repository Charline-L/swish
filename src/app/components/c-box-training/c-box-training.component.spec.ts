import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBoxTrainingComponent } from './c-box-training.component';

describe('CBoxTrainingComponent', () => {
  let component: CBoxTrainingComponent;
  let fixture: ComponentFixture<CBoxTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBoxTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBoxTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
