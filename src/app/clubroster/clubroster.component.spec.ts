import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubrosterComponent } from './clubroster.component';

describe('ClubrosterComponent', () => {
  let component: ClubrosterComponent;
  let fixture: ComponentFixture<ClubrosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubrosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubrosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
