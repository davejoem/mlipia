import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortablenestableComponent } from './sortablenestable.component';

describe('SortablenestableComponent', () => {
  let component: SortablenestableComponent;
  let fixture: ComponentFixture<SortablenestableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortablenestableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortablenestableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
