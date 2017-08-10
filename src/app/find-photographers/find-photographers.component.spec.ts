import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPhotographersComponent } from './find-photographers.component';

describe('FindPhotographersComponent', () => {
  let component: FindPhotographersComponent;
  let fixture: ComponentFixture<FindPhotographersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPhotographersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPhotographersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
