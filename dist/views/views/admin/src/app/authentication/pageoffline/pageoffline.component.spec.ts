import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageofflineComponent } from './pageoffline.component';

describe('PageofflineComponent', () => {
  let component: PageofflineComponent;
  let fixture: ComponentFixture<PageofflineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageofflineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageofflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
