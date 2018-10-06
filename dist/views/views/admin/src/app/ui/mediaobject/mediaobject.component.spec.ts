import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaobjectComponent } from './mediaobject.component';

describe('MediaobjectComponent', () => {
  let component: MediaobjectComponent;
  let fixture: ComponentFixture<MediaobjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaobjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
