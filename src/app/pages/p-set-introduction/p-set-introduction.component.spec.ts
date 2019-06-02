import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PSetIntroductionComponent } from './p-set-introduction.component';

describe('PSetIntroductionComponent', () => {
  let component: PSetIntroductionComponent;
  let fixture: ComponentFixture<PSetIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PSetIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PSetIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
