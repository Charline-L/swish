import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PSetComponent } from './p-set.component';

describe('PSetComponent', () => {
  let component: PSetComponent;
  let fixture: ComponentFixture<PSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
