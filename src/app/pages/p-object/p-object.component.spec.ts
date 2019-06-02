import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PObjectComponent } from './p-object.component';

describe('PObjectComponent', () => {
  let component: PObjectComponent;
  let fixture: ComponentFixture<PObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
