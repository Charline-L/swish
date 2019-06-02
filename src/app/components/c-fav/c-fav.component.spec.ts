import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CFavComponent } from './c-fav.component';

describe('CFavComponent', () => {
  let component: CFavComponent;
  let fixture: ComponentFixture<CFavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CFavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
