import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPlacehoderComponent } from './main-placehoder.component';

describe('MainPlacehoderComponent', () => {
  let component: MainPlacehoderComponent;
  let fixture: ComponentFixture<MainPlacehoderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPlacehoderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPlacehoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
