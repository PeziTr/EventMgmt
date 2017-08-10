import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventdetailsformComponent } from './eventdetailsform.component';

describe('EventdetailsformComponent', () => {
  let component: EventdetailsformComponent;
  let fixture: ComponentFixture<EventdetailsformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventdetailsformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventdetailsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
