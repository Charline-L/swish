import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBoxBadgeComponent } from './c-box-badge.component';

describe('CBoxBadgeComponent', () => {
  let component: CBoxBadgeComponent;
  let fixture: ComponentFixture<CBoxBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBoxBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBoxBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
