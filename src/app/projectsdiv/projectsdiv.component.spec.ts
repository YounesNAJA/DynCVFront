import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsdivComponent } from './projectsdiv.component';

describe('ProjectsdivComponent', () => {
  let component: ProjectsdivComponent;
  let fixture: ComponentFixture<ProjectsdivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsdivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
