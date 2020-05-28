import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSmallComponent } from './app-small.component';

describe('AppSmallComponent', () => {
  let component: AppSmallComponent;
  let fixture: ComponentFixture<AppSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
