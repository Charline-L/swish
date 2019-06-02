import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CNavigationComponent } from './c-navigation.component';

describe('CNavigationComponent', () => {
  let component: CNavigationComponent;
  let fixture: ComponentFixture<CNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
