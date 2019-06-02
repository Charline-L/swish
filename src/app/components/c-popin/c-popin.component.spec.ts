import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CPopinComponent } from './c-popin.component';

describe('CPopinComponent', () => {
  let component: CPopinComponent;
  let fixture: ComponentFixture<CPopinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPopinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CPopinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
