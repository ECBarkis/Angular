/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DatesComponent } from './dates.component';

describe('DatesComponent', () => {
  let component: DatesComponent;
  let fixture: ComponentFixture<DatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});