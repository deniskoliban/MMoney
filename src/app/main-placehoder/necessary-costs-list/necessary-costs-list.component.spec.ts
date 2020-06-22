/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NecessaryCostsListComponent } from './necessary-costs-list.component';

describe('NecessaryCostsListComponent', () => {
  let component: NecessaryCostsListComponent;
  let fixture: ComponentFixture<NecessaryCostsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NecessaryCostsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NecessaryCostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
