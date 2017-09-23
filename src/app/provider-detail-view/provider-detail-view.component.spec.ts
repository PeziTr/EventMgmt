import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDetailViewComponent } from './provider-detail-view.component';

describe('ProviderDetailViewComponent', () => {
  let component: ProviderDetailViewComponent;
  let fixture: ComponentFixture<ProviderDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
