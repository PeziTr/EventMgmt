import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaselectorComponent } from './areaselector.component';

describe('AreaselectorComponent', () => {
  let component: AreaselectorComponent;
  let fixture: ComponentFixture<AreaselectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaselectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
