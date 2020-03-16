import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitedivComponent } from './whitediv.component';

describe('WhitedivComponent', () => {
  let component: WhitedivComponent;
  let fixture: ComponentFixture<WhitedivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhitedivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhitedivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
