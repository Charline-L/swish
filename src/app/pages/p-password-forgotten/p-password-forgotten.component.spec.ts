import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PPasswordForgottenComponent } from './p-password-forgotten.component';

describe('PPasswordForgottenComponent', () => {
  let component: PPasswordForgottenComponent;
  let fixture: ComponentFixture<PPasswordForgottenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PPasswordForgottenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PPasswordForgottenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
