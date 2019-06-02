import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PIntroductionComponent } from './p-introduction.component';

describe('PIntroductionComponent', () => {
  let component: PIntroductionComponent;
  let fixture: ComponentFixture<PIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
