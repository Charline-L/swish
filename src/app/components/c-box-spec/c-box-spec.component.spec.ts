import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBoxSpecComponent } from './c-box-spec.component';

describe('CBoxSpecComponent', () => {
  let component: CBoxSpecComponent;
  let fixture: ComponentFixture<CBoxSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBoxSpecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBoxSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
