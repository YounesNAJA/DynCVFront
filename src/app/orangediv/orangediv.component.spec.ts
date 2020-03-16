import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangedivComponent } from './orangediv.component';

describe('OrangedivComponent', () => {
  let component: OrangedivComponent;
  let fixture: ComponentFixture<OrangedivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrangedivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrangedivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
