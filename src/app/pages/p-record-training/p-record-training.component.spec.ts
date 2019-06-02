import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PRecordTrainingComponent } from './p-record-training.component';

describe('PRecordTrainingComponent', () => {
  let component: PRecordTrainingComponent;
  let fixture: ComponentFixture<PRecordTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PRecordTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PRecordTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
